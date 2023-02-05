package token

import (
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/brkss/gogql/utils"
	"github.com/stretchr/testify/require"
)


// TestPasetoToken test tokem creation, token validation 
// -> with valid token 
// -> expired token 
// -> invalid token 
func TestPasetoToken(t *testing.T){

	userId := uuid.New().String()
	duration := time.Second * 15
	key1 := utils.RandomString(32)

	maker, err := NewPasetoMaker(key1)
	require.NoError(t, err)
	require.NotEmpty(t, maker)

	token, payload, err := maker.CreateToken(userId, duration)
	require.NoError(t, err)
	require.NotEmpty(t, token)
	require.NotEmpty(t, payload)

	payload, err = maker.VerifyToken(token) 
	require.NoError(t, err)
	require.NotEmpty(t, payload)

	expiredToken, payload, err := maker.CreateToken(userId, -duration)
	require.NoError(t, err)
	require.NotEmpty(t, expiredToken)
	require.NotEmpty(t, payload)

	_, err = maker.VerifyToken(expiredToken)
	require.Error(t, err)
	require.EqualError(t, err, ErrExpiredToken.Error())

	maker1, err := NewPasetoMaker(utils.RandomString(32))
	require.NoError(t, err)

	_, err = maker1.VerifyToken(token)
	require.Error(t, err)
	require.EqualError(t, err, ErrInvalidToken.Error())
}
