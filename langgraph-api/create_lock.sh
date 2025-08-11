#!/bin/bash
# Create uv.lock file locally
cd /mnt/c/peterbot-ai-hetzer/peterbot-ai/langgraph-api

# Install uv if not installed
if ! command -v uv &> /dev/null; then
    echo "Installing uv..."
    pip install uv
fi

# Create lock file
echo "Creating uv.lock file..."
uv lock

echo "uv.lock created successfully!"