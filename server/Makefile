

DB_CONTAINER = postgres12-unwind
DB_USERNAME = root
DB_PASSWORD = root
DB_DBNAME = unwind
DB_PORT = 5432
DB_HOST = localhost


all:
	@echo "Please spicify which makefile recipe !"

startdb:
	docker start $(DB_CONTAINER)

stopdb:
	docker stop $(DB_CONTAINER)

postgres:
	docker run --name $(DB_CONTAINER) -p $(DB_PORT):$(DB_PORT) -e POSTGRES_USER=$(DB_USERNAME) -e POSTGRES_PASSWORD=$(DB_PASSWORD) -d postgres:12-alpine 

createdb:
	docker exec -it $(DB_CONTAINER) createdb --username=$(DB_USERNAME) --owner=$(DB_USERNAME) $(DB_DBNAME)

dropdb:
	docker exec -it $(DB_CONTAINER) dropdb $(DB_DBNAME)

migrateup:
	migrate -path db/migration -database "postgres://$(DB_USERNAME):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DBNAME)?sslmode=disable" -verbose up 

migratedown:
	migrate -path db/migration -database "postgres://$(DB_USERNAME):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DBNAME)?sslmode=disable" -verbose down 1

sqlc:
	sqlc generate

test:
	go test -v -cover ./...


gen:
	go run github.com/99designs/gqlgen generate

createmigration:
	migrate create -ext sql -dir db/migration -seq $(TABLE)

server:
	go run .	

deploy:
	docker compose up --force-recreate --build

.PHONY:
	gen server test sqlc migrateup migratedown dropdb createdb postgres startdb stopdb all
