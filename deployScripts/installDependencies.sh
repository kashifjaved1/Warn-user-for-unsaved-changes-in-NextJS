# apt update
# apt install -y apache2
# apt install -y nodejs
# apt install -y npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
cd .nvm
bash nvm.sh
nvm install --lts
nvm use --lts
/home/ubuntu/.nvm/versions/node/v16.16.0/bin/node -v
/home/ubuntu/.nvm/versions/node/v16.16.0/bin/npm install
service codedeploy-agent restart
# rm -rf /var/www/html/*