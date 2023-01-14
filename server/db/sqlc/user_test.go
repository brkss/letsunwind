package db

import (
	"context"
	"database/sql"
	"testing"

	"github.com/brkss/go-auth/utils"
	"github.com/google/uuid"
	"github.com/stretchr/testify/require"
)


func CreateRandomUser(t *testing.T) User {

	arg := CreateUserParams{
		ID: uuid.New().String(),	
		Email: utils.RandomEmail(),
		Name: utils.RandomName(),
		Age: 22,
	}

	user, err := testQueries.CreateUser(context.Background(), arg)

	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, user.Age, arg.Age)
	require.Equal(t, user.Email, arg.Email)
	require.Equal(t, user.Name, arg.Name)
	require.Equal(t, user.ID, arg.ID)

	return user
}

func TestCreateUser(t *testing.T){
	CreateRandomUser(t)
}

func TestGetUserByEmail(t *testing.T){
	seed := CreateRandomUser(t)
	

	user, err := testQueries.GetUserByEmail(context.Background(), seed.Email)
	require.NoError(t, err)
	require.NotEmpty(t, user)

	require.Equal(t, user.Age, seed.Age)
	require.Equal(t, user.Email, seed.Email)
	require.Equal(t, user.Name, seed.Name)
	require.Equal(t, user.ID, seed.ID)

	
	_, err = testQueries.GetUserByEmail(context.Background(), utils.RandomEmail())
	require.Error(t, err)
	require.EqualError(t, err, sql.ErrNoRows.Error())
}
