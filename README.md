# PNPM Typescript Rust Monorepo

Pnpm workspaces based monorepo with essential configs and things.

## Info -

- Tanzeel - Frontend Vite App
- Libs/Ui - Simple UI components

All packages/apps needs to be started with `quran`/package-name in order to keep them inside the scope.

## Installation

```sh
pnpm install
```

To run the @rahma crate

```sh
cargo install cargo-watch
```

## Usage

### Tanzeel - Frontend Vite App

- Directly
  ```
  pnpm tanzeel dev
  ```
- Through Turborepo
  ```sh
  pnpm tanzeel:dev
  ```

### Rahma - Backend Rust Server using actix-web

- Directly

  ```
  pnpm rahma:dev
  ```

## Want to run other commands for some specific package?

```sh
pnpm <package> <command>
```

Example -

Run lint in Tanzeel

```sh
pnpm tanzeel lint
```

## Authors

- [@spa5k](https://www.github.com/spa5k)
