echo "building..."
echo "Installing all dependecies..."
yarn install;

echo "Installing dependencies and building in commons..."
cd ./commons && yarn install && yarn build;

echo "Installing dependencies in finance-api..."
cd ../finance-api && yarn install && yarn build;


echo "Build complete."
