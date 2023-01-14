package api

import (
	"net/http"

	db "github.com/brkss/go-auth/db/sqlc"
	"github.com/brkss/go-auth/utils"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type CreateUserRequest struct {
	Name string `json:"name" binding:"required"`
	Email string `jsoin:"email" binding:"required"`
	Age int32 `json:"age" binding:"required"`
}

type LoginUserRequest struct {
	Email string `json:"email" binding:"required"`
}

func (server *Server)CreateUserAPI(ctx *gin.Context){

	var req CreateUserRequest;
	err := ctx.ShouldBindJSON(&req)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, errResponse(err))
		return;
	}
	
	arg := db.CreateUserParams{
		ID: uuid.New().String(),
		Name: req.Name,
		Email: req.Email,
		Age: req.Age,
	}
	_, err = server.store.CreateUser(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errResponse(err))
		return;
	}

	// TODO: send confirmation email  to client 
	ctx.JSON(http.StatusOK, gin.H{"code": utils.GenerateOTP(6)})
}

func (server *Server)LoginUserAPI(ctx *gin.Context){
	var req LoginUserRequest;

	err := ctx.ShouldBindJSON(&req)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, errResponse(err))
		return;
	}
	_, err = server.store.GetUserByEmail(ctx, req.Email)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errResponse(err))
		return;
	}

	// TODO: send confirmation email  to client 
	ctx.JSON(http.StatusOK, gin.H{"code": utils.GenerateOTP(6)})
	
	return;
}
