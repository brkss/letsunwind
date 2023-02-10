package otp

import (
	"context"
	"errors"
	"time"

	db "github.com/brkss/gogql/db/sqlc"
	"github.com/brkss/gogql/utils"
	"github.com/google/uuid"
)

func CreateOTP(userId string, store db.Store, ctx context.Context)(string, error){

	otp := utils.RandomString(4)
	
	arg := db.CreateVerificationParams{
		ID: uuid.New().String(),
		UserID: userId,
		Code: otp,
		ExpiredAt: time.Now().Add(time.Minute * 10),
	}
	verification, err := store.CreateVerification(ctx, arg)
	if err != nil {
		return "", err
	}

	return verification.Code, nil;
}

func VerifyOTP(code string, userId string, store db.Store, ctx context.Context)(bool, error){
	arg := db.GetVerificationParams{
		Code: code,
		UserID: userId,
	}
	verification, err := store.GetVerification(ctx, arg)
	if err != nil {
		return false, err
	}
	if time.Now().After(verification.ExpiredAt){
		return false, errors.New("Verification Code Expired!")
	}
	err = store.BlockVerification(ctx, verification.ID);
	if err != nil {
		return false, errors.New("Something went wrong, please try again !");
	}
	return true, nil
}
