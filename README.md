# qudo
Here's a cool stack:

### Batteries Included
- Elysia backend (www app)
  - Swagger doc generation
  - Endpoint input validation based on Drizzle schemas
  - Renders JSX/HTML
- Drizzle ORM (db package)
- Docker for dev (docker package)
- Pnpm & bun based (super fast)

### Apps/Packages

- `📂 /apps/server` web server
  - `http://localhost:3000/` website/home page
  - `https://localhost:3000/swagger` generated API docs
  - `http://localhost:3000/*` api routes
- `📦 /packages/db` drizzle db
- `📦 /packages/docker` docker

## Development

### Setup Environment

Install [Bun](https://bun.sh/docs/installation) then copy/paste `.env.example` -> `.env`

## Manage Docker Database

- `bun docker up` to get dockers goin
- `bun db push` to push drizzle shii
- `bun db studio` to view the db
- `bun docker down && bun docker up` (as needed) clear & rebuild containers

### Run Dev Server

- `bun i `

- `bun dev`

### DB

- `bun db generate` to generate the db
- `bun db migrate` to migrate the db
- `bun db pull` to pull the db
- `bun db push` to push the db
- `bun db studio` to studio the db

### Docker

- `bun docker up` to get dockers goin
- `bun docker down` to get dockers down
- `bun docker start` to start the dockers
- `bun docker stop` to stop the dockers
