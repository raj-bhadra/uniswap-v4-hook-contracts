# Lightning Rod

Lightning Rod is the home of the Dapp Developer Kit (DDK) for Inco Lightning network.

<img src="./docs/images/lightning-rod.png" alt="Lightning Rod" width="300" style="float: right; margin-left: 20px; margin-bottom: 20px;">

## Prerequisites

We require recent versions of

- [Docker](https://www.docker.com/)
- [Bun](https://bun.sh/)

to be installed.

## Build

Build the components with:

```bash
bun install
```

## Local test network

To run a local test network, you need to have Docker installed. You can use the following command to start the network:

```bash
docker compose up
```

## Running simple end-to-end test

You can run the [`incolite.local.e2e.test.ts`](./test/src/incolite.local.e2e.test.ts) and automatically boot the local test network with:

```
make test
```

This runs the docker compose setup forked in the background, you can stop it with

```
make down
```

Or if you prefer to watch things in a terminal, first run:

```
docker compose up
```

in one terminal, and:

```
cd test && bun run test:e2e
```

In another terminal.
