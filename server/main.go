package main

import (
	"database/sql"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	db "github.com/brkss/gogql/db/sqlc"
	"github.com/brkss/gogql/directive"
	"github.com/brkss/gogql/graph"
	"github.com/brkss/gogql/middleware"
	"github.com/brkss/gogql/token"
	"github.com/brkss/gogql/utils"
	"github.com/go-chi/chi/v5"
	_ "github.com/lib/pq"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	config, err := utils.LoadConfig()
	if err != nil {
		log.Fatal("cannot load config : ", err);
	}

	con, err := sql.Open(config.DBDriver, config.DBSource)
	if err != nil {
		log.Fatal("cannot connect to database : ", err)
	}
	store := db.NewStore(con)

	tokenMaker, err := token.NewPasetoMaker(config.TokenSymtrictKey)
	if err != nil {
		log.Fatal("cannot create token maker : ", err)
	}

	router := chi.NewRouter()
	router.Use(middleware.AuthMiddleware(tokenMaker))
	

	c := graph.Config{Resolvers: &graph.Resolver{
		Config: config,
		Store: store,
		Maker: tokenMaker,
	}}

	c.Directives.Binding = directive.Binding
	c.Directives.Auth = directive.Auth

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(c))

	router.Post("/refresh-token", func (w http.ResponseWriter, r *http.Request){
		token.RefreshToken(store, config, tokenMaker, w, r);
	})

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
