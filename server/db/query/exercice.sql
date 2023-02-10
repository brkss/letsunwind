-- name: CreateExercice :one
INSERT INTO "exercices"
( id, name, duration, user_id )
VALUES ( $1, $2, $3, $4 )
RETURNING *;

-- name: GetExercices :many
SELECT * FROM "exercices"
WHERE user_id = $1
ORDER BY created_at DESC;

