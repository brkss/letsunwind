
CREATE TABLE "AwarnessContent" (
  "id" varchar PRIMARY KEY,
  "title" varchar NOT NULL,
  "podcastTitle" varchar NOT NULL,
  "path" varchar NOT NULL,
  "awarness_id" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "image" varchar NOT NULL
);

ALTER TABLE "AwarnessContent" ADD FOREIGN KEY ("awarness_id") REFERENCES "awarness" ("id");