#!/usr/bin/env bash
set -e

# update instance
apt -y update

# install pm2 module globaly
npm install -g pm2
pm2 update
