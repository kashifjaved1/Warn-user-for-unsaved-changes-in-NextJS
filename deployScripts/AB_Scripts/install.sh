#!/usr/bin/env bash
set -e

# update instance
apt -y update

#install nodejs
apt install nodejs -y
node -v
apt install npm -y

# install pm2 module globaly
npm install -g pm2
# pm2 update
rm -rf ~/node
