

-- name: CreateVerification :one 
INSERT INTO "verfications"
(id, code, user_id, expired_at)
VALUES
( $1, $2, $3, $4 )
RETURNING *;

-- name: GetVerification :one 
SELECT * FROM "verfications"
WHERE user_id = $1
AND code = $2
AND  expired_at > NOW() 
AND blocked = false
LIMIT 1;

-- name: BlockVerification :exec
UPDATE "verfications"
SET blocked = true 
WHERE id = $1;
