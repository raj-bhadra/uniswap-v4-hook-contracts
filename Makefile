# Preamble (see https://tech.davis-hansson.com/p/make/)
SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

include .env

.PHONY up:
up:
	docker compose up --detach

.PHONY: down
down:
	docker compose down

.PHONY: test
test: up
	bun run vitest test/src/incolite.local.e2e.test.ts
