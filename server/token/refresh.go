package token

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	db "github.com/brkss/gogql/db/sqlc"
	"github.com/brkss/gogql/utils"
)

type RefreshTokenRequest struct {
	RefreshToken 	string `json:"refresh_token"`
}

func RefreshToken(store db.Store, config *utils.Config, maker Maker, w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	decoder := json.NewDecoder(r.Body)
	
	var req RefreshTokenRequest;
	err := decoder.Decode(&req)

	if err != nil {
		w.Write([]byte(`{"error": "refresh token not found !"}`))
		return;
	} 
	if len(req.RefreshToken) == 0 {
		w.Write([]byte(`{"error": "invalid refresh token !"}`))
		return;
	}
	payload, err := maker.VerifyToken(req.RefreshToken)
	if err != nil {
		w.Write([]byte(`{"error": "invalid refresh token !"}`))
		return;
	}
	
	if time.Now().After(payload.ExpireAt){
		w.Write([]byte(`{"error": "expired token !"}`))
		return;
	}

	session, err := store.GetSession(r.Context(), payload.ID);
	if err != nil {
		w.Write([]byte(`{"error": "invalid token !"}`))
		return;
	}

	if session.UserID != payload.UserID {
		w.Write([]byte(`{"error": "user: access denied !"}`))
		return;	
	}

	if session.Blocked {
		w.Write([]byte(`{"error": "blocked token !"}`))
		return;	
	}

	user, err := store.GetUser(r.Context(), payload.UserID)
	if err != nil {
		w.Write([]byte(`{"error": "invalid user !"}`))
		return;
	}

	err = store.BlockSession(r.Context(), session.ID)
	if err != nil {
		w.Write([]byte(`{"error": "cannot block old session !"}`))
		return;
	}


	refreshToken, refreshPayload, err := maker.CreateToken(user.ID, config.RefreshTokenDuration)
	if err != nil {
		w.Write([]byte(`{"error": "cannot create refresh token !"}`))
		return;
	}

	session, err = store.CreateSession(r.Context(), db.CreateSessionParams{
		ID: refreshPayload.ID,
		UserID: refreshPayload.UserID,
		Token: refreshToken,
		ExpiredAt: refreshPayload.ExpireAt,
		Blocked: false,
	})
	if err != nil {
		w.Write([]byte(`{"error": "cannot create token session !"}`))
		return;
	}
	accessToken, accessPayload, err := maker.CreateToken(user.ID, config.RefreshTokenDuration)
	if err != nil {
		w.Write([]byte(`{"error": "cannot create access token !"}`))
		return;
	}	

	w.Write([]byte(fmt.Sprintf(`
		{
			"access_token": "%s",
			"refresh_token": "%s",
			"refresh_token_expires_at": "%s",
			"access_token_expires_at": "%s"
		}
	`, accessToken, refreshToken, refreshPayload.ExpireAt.String(), accessPayload.ExpireAt.String())))
	return;
}
