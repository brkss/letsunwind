// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: awarness.sql

package db

import (
	"context"
	"database/sql"
)

const createAwarenessContent = `-- name: CreateAwarenessContent :one
INSERT INTO "awarness"
( id, content, image, survey_id, gradient_bottom, gradient_top, title )
VALUES ( $1, $2, $3, $4, $5, $6, $7 )
RETURNING id, content, image, survey_id, title, gradient_top, gradient_bottom
`

type CreateAwarenessContentParams struct {
	ID             string         `json:"id"`
	Content        string         `json:"content"`
	Image          string         `json:"image"`
	SurveyID       sql.NullString `json:"survey_id"`
	GradientBottom string         `json:"gradient_bottom"`
	GradientTop    string         `json:"gradient_top"`
	Title          string         `json:"title"`
}

func (q *Queries) CreateAwarenessContent(ctx context.Context, arg CreateAwarenessContentParams) (Awarness, error) {
	row := q.db.QueryRowContext(ctx, createAwarenessContent,
		arg.ID,
		arg.Content,
		arg.Image,
		arg.SurveyID,
		arg.GradientBottom,
		arg.GradientTop,
		arg.Title,
	)
	var i Awarness
	err := row.Scan(
		&i.ID,
		&i.Content,
		&i.Image,
		&i.SurveyID,
		&i.Title,
		&i.GradientTop,
		&i.GradientBottom,
	)
	return i, err
}

const getAwarness = `-- name: GetAwarness :one
SELECT id, content, image, survey_id, title, gradient_top, gradient_bottom FROM "awarness"
WHERE id = $1
LIMIT 1
`

func (q *Queries) GetAwarness(ctx context.Context, id string) (Awarness, error) {
	row := q.db.QueryRowContext(ctx, getAwarness, id)
	var i Awarness
	err := row.Scan(
		&i.ID,
		&i.Content,
		&i.Image,
		&i.SurveyID,
		&i.Title,
		&i.GradientTop,
		&i.GradientBottom,
	)
	return i, err
}

const getAwarnesses = `-- name: GetAwarnesses :many
SELECT id, title, gradient_top, gradient_bottom, survey_id FROM "awarness"
ORDER BY id
`

type GetAwarnessesRow struct {
	ID             string         `json:"id"`
	Title          string         `json:"title"`
	GradientTop    string         `json:"gradient_top"`
	GradientBottom string         `json:"gradient_bottom"`
	SurveyID       sql.NullString `json:"survey_id"`
}

func (q *Queries) GetAwarnesses(ctx context.Context) ([]GetAwarnessesRow, error) {
	rows, err := q.db.QueryContext(ctx, getAwarnesses)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetAwarnessesRow{}
	for rows.Next() {
		var i GetAwarnessesRow
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.GradientTop,
			&i.GradientBottom,
			&i.SurveyID,
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