cd /home/ubuntu
chmod +x ./install
./install auto > /tmp/logfile

npm install -g pm2
# pm2 update
rm -rf /home/ubuntu/node/