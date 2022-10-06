#!/bin/bash

#install nodejs
apt install nodejs -y
apt install npm -y

# updating nodejs
npm install -g n
n lts
n prune
hash -r

# install pm2 module globaly
npm install -g pm2
# pm2 update
rm -rf /home/ubuntu/node/
