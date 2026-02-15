#!/bin/bash


set -e

echo "🚀 Starting Good morning page"

# --- Start Node backend ---
echo "Starting Node backend..."
cd server
npm install
# Run backend in background
nohup node server.js > backend.log 2>&1 &
BACKEND_PID=$!
echo "Node backend running on http://localhost:3000 (PID: $BACKEND_PID)"

# --- Start Angular frontend ---
echo "Starting Angular frontend..."
cd ../good-morning
npm install
# Run Angular in background
nohup ng serve --host 0.0.0.0 > frontend.log 2>&1 &
FRONTEND_PID=$!
echo "Angular frontend running on http://localhost:4200 (PID: $FRONTEND_PID)"

echo "Project started successfully!"
echo "Press Ctrl+C to stop both processes when done."
