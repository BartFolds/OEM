#!/bin/sh

# Script to wait for ford-bot to be ready (HTTP 200 on / endpoint)

echo "Waiting for ford-bot to be ready..."

until curl -s -f -o /dev/null http://ford-bot:5015; do
  echo "ford-bot not available yet..."
  sleep 2
done

echo "ford-bot is up and running!"
exec "$@"
