# Full stack Docker/TypeScript/Express/React/MobX/GRPC monorepo starter

Flexible boilerplate I wish I have every time I start a project.  

## Features

- Monorepo for client and server code.
- Docker-based development and deployment. 
- Client and server share code (interfaces for example or views).
- SSR.
- PUG templates for static pages.
- Support sourcemaps on backend in production.
- Configuration via `.env` file.
- Prettier for code formatting.
- MobX for state management.

## Development

Rebuild images after config/dependencies change

```
docker-compose -f docker-compose.dev.yml build --no-cache
```

or

```
npm run docker-reset
```


Start development inside container (code change will be handled automatically)

```
docker-compose -f docker-compose.dev.yml up
```

or 

```
npm run docker-dev
```

For local development run 

```
npm run dev
```

## Production


Run rebuilding

```
npm run docker-prod
```

Run from prev build

```
npm run docker-prod-cache
```

## Features wish list / ideas to play with

- [done] Isomorphic react components.
- MobX-friendly isomorphic router.
- Tests.
    - e2e.
    - unit client/server.
- Logging.
- Shared client/server state
- [done] Docker.
- ? grpc https://grpc.io/docs/tutorials/basic/node.html
- p2p?
