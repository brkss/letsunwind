package db

import (
	"database/sql"
	"log"
	"os"
	"testing"
	_ "github.com/lib/pq"
)


var testQueries *Queries;

const (
	DBDriver = "postgres"
	DBSource = "postgres://root:root@localhost:5432/gogql?sslmode=disable"
)

func TestMain(m *testing.M){

	con, err := sql.Open(DBDriver, DBSource) 
	if err != nil {
		log.Fatal("cannot connect to database !");
	}

	testQueries = New(con)

	os.Exit(m.Run())
}
