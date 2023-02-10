
-- name: CreateSurvey :one
INSERT INTO "surveys"
( id, name )
VALUES ( $1, $2 )
RETURNING *;


-- name: CreateSurveyQuestion :one
INSERT INTO "questions"
( id, qst, survey_id )
VALUES ( $1, $2, $3 )
RETURNING *;


-- name: CreateQuestionAnswer :one
INSERT INTO "answers"
( id, ans, val, question_id )
VALUES ( $1, $2, $3, $4)
RETURNING *;


-- name: CreateSurveyResult :one 
INSERT INTO "results"
( id, min, max, comment, surver_id )
VALUES ( $1, $2, $3, $4, $5 )
RETURNING *;

-- name: GetSurvies :many 
SELECT * FROM "surveys"
ORDER BY id;

-- name: GetSurvey :one
SELECT * FROM "surveys"
WHERE id = $1
LIMIT 1;

-- name: GetSurveyQuestions :many
SELECT * FROM "questions"
WHERE survey_id = $1;

-- name: GetQuestionAnswers :many
SELECT * FROM "answers"
WHERE question_id = $1;

-- name: GetSurveyResults :many
SELECT * from "results"
WHERE surver_id= $1;
