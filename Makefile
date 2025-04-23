# Preamble (see https://tech.davis-hansson.com/p/make/)
SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

DUMPS_DIR=node_modules/@inco/lightning/dumps

.PHONY: compile_solidity
compile_solidity:
	cd contracts && forge compile

.PHONY up:
up: compile_solidity
	docker compose up --detach

.PHONY: down
down:
	docker compose down

.PHONY: test
test: up
	bun run vitest run test/src/lightning.local.e2e.test.ts

# This requires
.PHONY: test_base_sepolia
test_base_sepolia:
	bun run vitest run test/src/lightning.base-sepolia.e2e.test.ts

# Updates the DUMP_ENV_FILE in .env to a most recent dump
.PHONY: update_dump
update_dump:
	sed -i '/^DUMP_ENV_FILE=/c\DUMP_ENV_FILE=$(DUMPS_DIR)/$(shell ls $(DUMPS_DIR) | tail -1)' .env
