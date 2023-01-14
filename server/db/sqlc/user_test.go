package db

import (
	"context"
	"testing"

	"github.com/brkss/go-auth/utils"
	"github.com/google/uuid"
)


func CreateUser(t *testing.T) User {

	arg := CreateUserParams{
		ID: uuid.New().String(),	
		Email: utils.RandomEmail(),
		Name: utils.RandomName(),
		Age: 22,
	}

	user, err := testQueries.createUser(context.Background(), arg)

}
