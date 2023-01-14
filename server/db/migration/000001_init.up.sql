CREATE TABLE "users" (
  "id" varchar PRIMARY KEY,
  "name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "age" int NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "exercices" (
  "id" varchar PRIMARY KEY,
  "name" varchar NOT NULL,
  "duration" varchar NOT NULL,
  "user_id" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "surveys" (
  "id" varchar PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "questions" (
  "id" varchar PRIMARY KEY,
  "qst" text NOT NULL,
  "survey_id" varchar NOT NULL
);

CREATE TABLE "answers" (
  "id" varchar PRIMARY KEY,
  "ans" text NOT NULL,
  "question_id" varchar NOT NULL
);

CREATE TABLE "results" (
  "id" varchar PRIMARY KEY,
  "min" int NOT NULL,
  "max" int NOT NULL,
  "comment" varchar NOT NULL,
  "surver_id" varchar NOT NULL
);

CREATE TABLE "surveyed" (
  "id" varchar PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "survey_id" varchar NOT NULL,
  "question_id" varchar NOT NULL,
  "answer_id" varchar NOT NULL
);

ALTER TABLE "exercices" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "questions" ADD FOREIGN KEY ("survey_id") REFERENCES "surveys" ("id");

ALTER TABLE "answers" ADD FOREIGN KEY ("question_id") REFERENCES "questions" ("id");

ALTER TABLE "results" ADD FOREIGN KEY ("surver_id") REFERENCES "surveys" ("id");

ALTER TABLE "surveyed" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "surveyed" ADD FOREIGN KEY ("survey_id") REFERENCES "surveys" ("id");

ALTER TABLE "surveyed" ADD FOREIGN KEY ("question_id") REFERENCES "questions" ("id");

ALTER TABLE "surveyed" ADD FOREIGN KEY ("answer_id") REFERENCES "answers" ("id");
