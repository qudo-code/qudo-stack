CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar PRIMARY KEY NOT NULL,
	"username" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
