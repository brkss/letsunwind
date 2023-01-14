-- name: CreateUser :one 

INSERT INTO users 
( id, name, email, age )
VALUES ( $1, $2, $3, $4 )
RETURNING *;

-- name: GetUserByEmail :one
SELECT * FROM users
WHERE email = $1
LIMIT 1;
