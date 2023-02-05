package utils

import (
	"testing"

	"github.com/stretchr/testify/require"
	"golang.org/x/crypto/bcrypt"
)


func TestPasswordHashing(t *testing.T){

	password := RandomString(10)
	
	// hashing password 
	hash, err := HashPassword(password)
	require.NoError(t, err)
	require.NotEmpty(t, hash)

	// verify valid password
	err = VerifyPassword(hash, password)
	require.NoError(t, err)

	// verify with invalid password
	password1 := RandomString(10)
	err = VerifyPassword(hash, password1)
	require.Error(t, err)
	require.EqualError(t, err, bcrypt.ErrMismatchedHashAndPassword.Error())

}
