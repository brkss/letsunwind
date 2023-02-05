package db

import (
	"context"
	"testing"

	"github.com/brkss/gogql/utils"
	"github.com/google/uuid"
	"github.com/stretchr/testify/require"
)


func CreateRandomUser(t *testing.T) User{

	arg := CreateUserParams{
		ID: uuid.New().String(),
		Name: utils.RandomName(),
		Email: utils.RandomEmail(),
		Password: utils.RandomString(10),
	}
	user, err := testQueries.CreateUser(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, user.ID, arg.ID)
	require.Equal(t, user.Name, arg.Name)
	require.Equal(t, user.Email, arg.Email)
	require.Equal(t, user.Password, arg.Password)
	
	return user
}

func TestCreateUser(t *testing.T){
	CreateRandomUser(t)
}

func TestGetUser(t *testing.T){
	seed := CreateRandomUser(t)
	
	user, err := testQueries.GetUser(context.Background(), seed.ID)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, user.ID, seed.ID)
	require.Equal(t, user.Name, seed.Name)
	require.Equal(t, user.Email, seed.Email)
	require.Equal(t, user.Password, seed.Password)

}

func TestGetUserByEmail(t *testing.T){
	seed := CreateRandomUser(t)
	
	user, err := testQueries.GetUserByEmail(context.Background(), seed.Email)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, user.ID, seed.ID)
	require.Equal(t, user.Name, seed.Name)
	require.Equal(t, user.Email, seed.Email)
	require.Equal(t, user.Password, seed.Password)

}
