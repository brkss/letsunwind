CREATE TABLE "sessions" (
  "id" varchar PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "token" text NOT NULL,
  "blocked" boolean NOT NULL DEFAULT (false),
  "expired_at" timestamp NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

ALTER TABLE "sessions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
