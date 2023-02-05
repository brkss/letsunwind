package middleware

import (
	"context"
	"fmt"
	"net/http"
	"strings"

	"github.com/brkss/gogql/token"
)

const (
	AuthorizationTypeBearer = "bearer"
	AuthorizationKeyHeader = "Authorization"
	AuthorizationPayloadKey = "payload"
)

func errResponse(msg string) string {
	return fmt.Sprintf(`{"error": "%s"}`, msg)
}

func AuthMiddleware(maker token.Maker) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){

			fmt.Println("Middleware called ! ")

			auth := r.Header.Get(AuthorizationKeyHeader)
			if len(auth) == 0 {
				next.ServeHTTP(w, r)
				return;
			}

			fields := strings.Split(auth, " ")
			if len(fields) < 2 {
				http.Error(w, errResponse("invalid token"), http.StatusForbidden)
				return;
			}

			// compare token type 
			if strings.ToLower(fields[0]) != AuthorizationTypeBearer {
				http.Error(w, errResponse("invalid token type"), http.StatusForbidden)
				return;
			}

			// verify token !
			payload, err := maker.VerifyToken(fields[1])
			if err != nil {
				http.Error(w, errResponse("invalid token !"), http.StatusForbidden)
				return;	
			}
	
			ctx := context.WithValue(r.Context(), AuthorizationPayloadKey, payload)
			r = r.WithContext(ctx)
			next.ServeHTTP(w, r)
			fmt.Printf("after middleware next !")	
		})
	} 
}

// GetPayload get payload saved in request context !  
func GetPayload(ctx context.Context) *token.Payload {
	payload, _ := ctx.Value(AuthorizationPayloadKey).(*token.Payload)
	return payload
}
