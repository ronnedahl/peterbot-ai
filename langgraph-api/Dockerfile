# Backend Dockerfile for LangGraph API
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install uv - try multiple methods
# Method 1: Try the official installer
RUN curl -LsSf https://astral.sh/uv/install.sh | sh || \
    # Method 2: If that fails, try pip
    pip install uv

# Add both possible paths
ENV PATH="/root/.local/bin:/root/.cargo/bin:${PATH}"

# Verify uv installation
RUN which uv && uv --version

# Copy dependency files
COPY pyproject.toml .
COPY requirements.txt .

# Create virtual environment and install dependencies
RUN uv venv && \
    . .venv/bin/activate && \
    uv pip install -r requirements.txt

# Copy application code
COPY src/ ./src/
COPY scripts/ ./scripts/

# Copy environment file (will be overridden by docker-compose)
COPY .env.example .env

# Expose port
EXPOSE 8000

# Set Python path
ENV PYTHONPATH=/app

# Run the application
CMD [".venv/bin/python", "scripts/dev.py"]