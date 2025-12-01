#!/bin/bash
set -e

PORT=$1
TIMEOUT=${2:-30}

echo "Waiting for port $PORT to be ready (timeout: ${TIMEOUT}s)..."

for i in $(seq 1 $TIMEOUT); do
    if nc -z localhost $PORT 2>/dev/null; then
        echo "Port $PORT is ready!"
        exit 0
    fi
    echo "Attempt $i/$TIMEOUT: Port $PORT not ready yet..."
    sleep 1
done

echo "ERROR: Port $PORT did not become ready within ${TIMEOUT}s"
exit 1
