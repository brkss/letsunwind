-- name: CreateUser :one
INSERT INTO users 
( id, name, email, password, age )
VALUES ( $1, $2, $3, $4, $5 )
RETURNING *;

-- name: GetUserByEmail :one
SELECT * FROM users 
WHERE email = $1
LIMIT 1;

-- name: GetUser :one
SELECT * FROM users 
WHERE id = $1
LIMIT 1;
