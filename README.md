# Neon Local Development (using WebSockets)

This repository demonstrates how to use the Neon Serverless Driver during local
development. Specifically it shows how to use the `Client` and `Pool` instances
that work over WebSockets.

Tested with:

* Docker Desktop 4.27
* Node.js 18

## Usage

Start a Postgres instance and WebSocket Proxy using Docker Compose:

```bash
docker-compose up
```

Next, run the Node.js application in another terminal:

```bash
npm install
npm start
```

It should print something similar to:

```js
[
  {
    version: 'PostgreSQL 16.1 (Debian 16.1-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit'
  }
]
```
