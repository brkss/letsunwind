// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: exercice.sql

package db

import (
	"context"
)

const createExercice = `-- name: CreateExercice :one
INSERT INTO "exercices"
( id, name, duration, user_id )
VALUES ( $1, $2, $3, $4 )
RETURNING id, name, duration, user_id, created_at
`

type CreateExerciceParams struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Duration string `json:"duration"`
	UserID   string `json:"user_id"`
}

func (q *Queries) CreateExercice(ctx context.Context, arg CreateExerciceParams) (Exercice, error) {
	row := q.db.QueryRowContext(ctx, createExercice,
		arg.ID,
		arg.Name,
		arg.Duration,
		arg.UserID,
	)
	var i Exercice
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Duration,
		&i.UserID,
		&i.CreatedAt,
	)
	return i, err
}

const getExercices = `-- name: GetExercices :many
SELECT id, name, duration, user_id, created_at FROM "exercices"
WHERE user_id = $1
ORDER BY created_at DESC
`

func (q *Queries) GetExercices(ctx context.Context, userID string) ([]Exercice, error) {
	rows, err := q.db.QueryContext(ctx, getExercices, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Exercice{}
	for rows.Next() {
		var i Exercice
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Duration,
			&i.UserID,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
