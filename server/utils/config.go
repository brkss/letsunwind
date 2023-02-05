package utils

import (
	"os"
	"time"

	"github.com/joho/godotenv"
)

type Config struct {
	DBSource 				string
	DBDriver 				string
	TokenSymtrictKey 		string
	TokenDuration 			time.Duration
	RefreshTokenDuration 	time.Duration
}

func LoadConfig()(*Config, error){

	err := godotenv.Load()
	if err != nil {
		return nil, err;
	}

	duration, err := time.ParseDuration(os.Getenv("TOKEN_DURATION"))
	if err != nil {
		return nil, err
	}

	refresh_token_duration, err := time.ParseDuration(os.Getenv("REFRESH_TOKEN_DURATION"))
	if err != nil {
		return nil, err
	}
	
	config := &Config{
		DBSource: os.Getenv("DB_SOURCE"),
		DBDriver: os.Getenv("DB_DRIVER"),
		TokenSymtrictKey: os.Getenv("TOKEN_SYMETRIC_KEY"),
		TokenDuration: duration,
		RefreshTokenDuration: refresh_token_duration,
	}

	return config, nil
}
