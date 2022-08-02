curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
cd .nvm
bash nvm.sh
nvm install --lts
nvm use --lts
node -v
cd /var/www/html
npm run build
npm start
