// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type AuthResponse struct {
	Status                bool    `json:"status"`
	Message               *string `json:"message"`
	AccessToken           *string `json:"access_token"`
	RefreshToken          *string `json:"refresh_token"`
	AccessTokenExpiresAt  *string `json:"access_token_expires_at"`
	RefreshTokenExpiresAt *string `json:"refresh_token_expires_at"`
}

type LoginUserInput struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type RegisterUserInput struct {
	Name     string  `json:"name"`
	Email    string  `json:"email"`
	Password string  `json:"password"`
	Age      float64 `json:"age"`
}

type User struct {
	ID    string  `json:"id"`
	Name  string  `json:"name"`
	Email string  `json:"email"`
	Age   float64 `json:"age"`
}
