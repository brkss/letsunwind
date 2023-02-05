-- name: CreateSession :one
INSERT INTO sessions
(
	id,
	user_id,
	token,
	blocked,
	expired_at
) VALUES (
	$1,
	$2,
	$3,
	$4,
	$5
) RETURNING *;



-- name: GetSession :one
SELECT * FROM sessions
WHERE id = $1 
LIMIT 1;

-- name: BlockSession :exec
UPDATE sessions
SET blocked = true
WHERE id = $1;

