# Full stack TypeScript/Express/React/MobX monorepo starter

Reasonable and flexible boilerplate.  

## Features

- Monorepo for client and server code.
- Client and server share code (interfaces for example).
- `npm run dev` for development.
    - HMR for frontend.
    - Server restarts on change.
- `npm run build` building for production.
- `npm run prod` running production code. Project should be built first.
- Support sourcemaps on backend in production.
- Configuration via `.env` file.
- Prettier for code formatting.
- MobX as state management.

## Features wish list / ideas to play with

- Isomorphic react components.
- MobX-friendly isomorphic router.
- Tests.
    - e2e.
    - unit client/server.
- Logging.
- Docker.
- ? grpc https://grpc.io/docs/tutorials/basic/node.html
