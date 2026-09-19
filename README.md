# Waymark

Waymark is a full-stack project kept in **one Git repository** (a monorepo).

That means frontend and backend live together, but they are **folders**, not separate Git repos.

```text
waymark/
  frontend/   # client: HTML, CSS, JavaScript (or React later)
  backend/    # server: API, database, authentication
```

## Why this structure?

- One `git clone` gives you the whole product.
- One pull request can change the UI and the API together.
- You avoid nested `.git` folders, which make Git skip files or track a pointer instead of real code.

## Folders

- `frontend/` — what the user sees in the browser
- `backend/` — the server that stores data and answers API requests

The old standalone repo `waymark_frontend` still exists on GitHub as a previous copy. New work belongs in this repo.

## Getting started

1. Clone this repository.
2. Work in `frontend/` for the client.
3. Work in `backend/` for the server.
