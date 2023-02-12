// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: verification.sql

package db

import (
	"context"
	"time"
)

const blockVerification = `-- name: BlockVerification :exec
UPDATE "verfications"
SET blocked = true 
WHERE id = $1
`

func (q *Queries) BlockVerification(ctx context.Context, id string) error {
	_, err := q.db.ExecContext(ctx, blockVerification, id)
	return err
}

const createVerification = `-- name: CreateVerification :one
INSERT INTO "verfications"
(id, code, user_id, expired_at)
VALUES
( $1, $2, $3, $4 )
RETURNING id, code, user_id, expired_at, created_at, blocked
`

type CreateVerificationParams struct {
	ID        string    `json:"id"`
	Code      string    `json:"code"`
	UserID    string    `json:"user_id"`
	ExpiredAt time.Time `json:"expired_at"`
}

func (q *Queries) CreateVerification(ctx context.Context, arg CreateVerificationParams) (Verfication, error) {
	row := q.db.QueryRowContext(ctx, createVerification,
		arg.ID,
		arg.Code,
		arg.UserID,
		arg.ExpiredAt,
	)
	var i Verfication
	err := row.Scan(
		&i.ID,
		&i.Code,
		&i.UserID,
		&i.ExpiredAt,
		&i.CreatedAt,
		&i.Blocked,
	)
	return i, err
}

const getVerification = `-- name: GetVerification :one
SELECT id, code, user_id, expired_at, created_at, blocked FROM "verfications"
WHERE user_id = $1
AND code = $2
AND  expired_at > NOW() 
AND blocked = false
LIMIT 1
`

type GetVerificationParams struct {
	UserID string `json:"user_id"`
	Code   string `json:"code"`
}

func (q *Queries) GetVerification(ctx context.Context, arg GetVerificationParams) (Verfication, error) {
	row := q.db.QueryRowContext(ctx, getVerification, arg.UserID, arg.Code)
	var i Verfication
	err := row.Scan(
		&i.ID,
		&i.Code,
		&i.UserID,
		&i.ExpiredAt,
		&i.CreatedAt,
		&i.Blocked,
	)
	return i, err
}