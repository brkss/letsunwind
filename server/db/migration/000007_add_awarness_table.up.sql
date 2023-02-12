

CREATE TABLE "awarness" (
  "id" varchar PRIMARY KEY,
  "content" text NOT NULL,
  "image" varchar NOT NULL,
  "survey_id" varchar
);

ALTER TABLE "awarness" ADD FOREIGN KEY ("survey_id") REFERENCES "surveys" ("id");
