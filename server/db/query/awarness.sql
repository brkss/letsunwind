

-- name: CreateAwarenessContent :one
INSERT INTO "awarness"
( id, content, image, survey_id, gradient_bottom, gradient_top, title )
VALUES ( $1, $2, $3, $4, $5, $6, $7 )
RETURNING *;

-- name: GetAwarnesses :many
SELECT id, title, image, gradient_top, gradient_bottom, survey_id FROM "awarness"
ORDER BY id;

-- name: GetAwarness :one 
SELECT * FROM "awarness"
WHERE id = $1
LIMIT 1;
