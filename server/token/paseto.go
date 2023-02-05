package token

import (
	"fmt"
	"time"

	"github.com/aead/chacha20poly1305"
	"github.com/o1egl/paseto"
)

type PasetoMaker struct {
	Paseto 		*paseto.V2
	SymetricKey string
} 


func NewPasetoMaker(symetricKey string) (Maker, error) {
	if len(symetricKey) < chacha20poly1305.KeySize {
		err := fmt.Errorf("Invalid symtric key must be atlead %d char", chacha20poly1305.KeySize);
		return nil, err
	}
	return &PasetoMaker{
		Paseto: paseto.NewV2(),
		SymetricKey: symetricKey,
	}, nil
}

func (p *PasetoMaker)CreateToken(userId string, duration time.Duration)(string, *Payload, error){

	payload := NewPayload(userId, duration)
	token, err := p.Paseto.Encrypt([]byte(p.SymetricKey), payload, nil)
	if err != nil {
		return "", nil, err
	}
	return token, payload, nil
}

func (p *PasetoMaker)VerifyToken(token string)(*Payload, error){
	var payload Payload
	err := p.Paseto.Decrypt(token, []byte(p.SymetricKey), &payload, nil)
	if err != nil {
		return nil, ErrInvalidToken
	}
	err = payload.Valid()
	if err != nil {
		return nil, err;
	}
	return &payload, nil
}
