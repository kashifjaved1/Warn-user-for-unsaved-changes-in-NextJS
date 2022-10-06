#!/bin/bash
# if [ ! -z "$DEPLOYMENT_GROUP_NAME" ]; then
#  export NODE_ENV=$DEPLOYMENT_GROUP_NAME
# fi

cd /home/ubuntu/node/
# npm run build
NODE_ENV=production pm2 start server.js
