#!/usr/bin/env bash

cd /home/ubuntu/node/
NODE_ENV=production pm2 start server.js