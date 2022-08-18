#!/usr/bin/env bash
if [ ! -z "$DEPLOYMENT_GROUP_NAME" ]; then
 export NODE_ENV=$DEPLOYMENT_GROUP_NAME
fi

cd /home/ubuntu/node/
npm run build
pm2 start server.js
