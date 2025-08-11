# Makefile for Peterbot Docker Development

.PHONY: help build up down restart logs shell clean test

# Default build method - use pip which always works
BUILD_METHOD ?= pip

# Default target
help:
	@echo "Peterbot Docker Commands:"
	@echo "  make build      - Build Docker images"
	@echo "  make up         - Start containers in development mode"
	@echo "  make down       - Stop and remove containers"
	@echo "  make restart    - Restart all containers"
	@echo "  make logs       - View container logs"
	@echo "  make shell-api  - Open shell in backend container"
	@echo "  make shell-web  - Open shell in frontend container"
	@echo "  make clean      - Remove containers, volumes, and images"
	@echo "  make test       - Run tests in containers"
	@echo "  make prod       - Start in production mode"

# Build Docker images (defaults to pip method)
build:
	@echo "Building with pip (stable method)..."
	docker-compose -f docker-compose.yml -f docker-compose.pip.yml -f docker-compose.dev.yml build

# Build with uv (experimental)
build-uv:
	@echo "Building with uv (experimental)..."
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml build

# Start containers in development mode (defaults to pip)
up:
	docker-compose -f docker-compose.yml -f docker-compose.pip.yml -f docker-compose.dev.yml up -d
	@echo "✅ Services started!"
	@echo "Frontend: http://localhost:5173"
	@echo "Backend API: http://localhost:8000"
	@echo "API Docs: http://localhost:8000/docs"

# Start with uv build (experimental)
up-uv:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
	@echo "✅ Services started (using uv)!"
	@echo "Frontend: http://localhost:5173"
	@echo "Backend API: http://localhost:8000"
	@echo "API Docs: http://localhost:8000/docs"

# Stop containers
down:
	docker-compose down

# Restart containers
restart: down up

# View logs
logs:
	docker-compose logs -f

# View specific service logs
logs-api:
	docker-compose logs -f backend

logs-web:
	docker-compose logs -f frontend

# Shell access
shell-api:
	docker-compose exec backend /bin/bash

shell-web:
	docker-compose exec frontend /bin/sh

# Clean everything
clean:
	docker-compose down -v --rmi all

# Run tests
test:
	docker-compose exec backend .venv/bin/python scripts/test_config.py
	docker-compose exec backend .venv/bin/python scripts/test_search.py

# Production mode
prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Build for production
build-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml build