package graph

import (
	db "github.com/brkss/gogql/db/sqlc"
	"github.com/brkss/gogql/token"
	"github.com/brkss/gogql/utils"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	Store 	db.Store
	Config 	*utils.Config
	Maker 	token.Maker
}
