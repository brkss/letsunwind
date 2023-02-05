package token

import (
	"errors"
	"time"

	"github.com/google/uuid"
)

var (
	ErrExpiredToken = errors.New("This token is expired") 
	ErrInvalidToken = errors.New("Invalid Token !")
)


type Payload struct {
	ID 			string
	UserID 		string
	ExpireAt 	time.Time
	IssuedAt 	time.Time
}

func NewPayload(userId string, duration time.Duration)(*Payload){

	return &Payload{
		ID: uuid.New().String(),
		UserID: userId,
		ExpireAt: time.Now().Add(duration),
		IssuedAt: time.Now(),
	}

}

func (p *Payload)Valid()(error){
	
	if time.Now().After(p.ExpireAt){
		return ErrExpiredToken
	}

	return nil
}
