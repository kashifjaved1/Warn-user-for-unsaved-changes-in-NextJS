#!/usr/bin/env bash
set -e

# update instance
apt -y update

#install nodejs
apt install nodejs -y
node -v
apt install npm -y

# updating nodejs
node -v
npm install -g n
n lts
n prune
hash -r
node -v

# install pm2 module globaly
npm install -g pm2
# pm2 update
rm -rf /home/ubuntu/node/
