#!/usr/bin/env bash
set -e

cd /home/ubuntu/node/

# updating nodejs
node -v
npm install -g n
n lts
n prune
node -v

# installing project dependencies and building project
npm install
npm run build
