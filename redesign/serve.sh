#!/bin/bash

# Simple local development server for testing the redesigned site
# Usage: ./serve.sh or bash serve.sh

echo "🌻 Heliotrope Imaginal - Starting local development server..."
echo ""
echo "Server running at: http://localhost:8000"
echo "Press Ctrl+C to stop"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000
