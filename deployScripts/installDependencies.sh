# apt update
apt install -y apache2
apt install -y nodejs
apt install -y npm
npm install
service codedeploy-agent stop
rm -rf /opt/codedeploy-agent/deployment-root/*
service codedeploy-agent start
rm -rf /var/www/html/*