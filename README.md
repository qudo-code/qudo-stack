# qudo

## Development

### Apps/Packages

- `📂 /apps/server` web server
  - `http://localhost:3000/` website/home page
  - `https://localhost:3000/swagger` generated API docs
  - `http://localhost:3000/*` api routes
- `📦 /packages/db` drizzle db
- `📦 /packages/docker` docker

### Setup Environment

Copy/paste `.env.example` -> `.env`

### Run Dev Server

- `pnpm i `
- `pnpm docker up` to get dockers goin
- `pnpm db push` to push drizzle shii
- `pnpm dev`

### DB

- `pnpm db generate` to generate the db
- `pnpm db migrate` to migrate the db
- `pnpm db pull` to pull the db
- `pnpm db push` to push the db
- `pnpm db studio` to studio the db

### Docker

- `pnpm docker up` to get dockers goin
- `pnpm docker down` to get dockers down
- `pnpm docker start` to start the dockers
- `pnpm docker stop` to stop the dockers
