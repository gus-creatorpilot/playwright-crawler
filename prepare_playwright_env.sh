#!/bin/sh

# Install playwright and its dependencies
npx -y playwright@1.50.1 install --with-deps chromium

# install node modules
npm install
