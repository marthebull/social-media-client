Course assignment for workflow

Alt skal funke utenom e2e testing, fikk til unittesting. Har beskrevet fremgangsmåte under :) 




- Installed node modules (npm init, npm i)
- Adding ("type": "module") in package.json.
- Added README.md and have updated steps frequently 



Configures Prettier, ESlint and Jest to run on commit:
- Installing ESlint (npm install eslint --save-dev)
- Initializing ESlint (npx eslint --init)
- Adding this ("test": "node src/js/joker.js") under scripts in package.json

- Installing Prettier (npm install --save-dev prettier)
- Testing Prettier (npx prettier -c src/**/*.js)
- Running Prettier (npx prettier -w src/**/*.js)
- Adding this ("format": "prettier -w src/**/*.js") under scripts in package.json

- Installing Jest (npm install --save-dev jest)
- Installing eslint-plugin-test (npm install eslint-plugin-jest@latest --save-dev)
- Adding this ({
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }) under overrides in .eslintrc.json
- Made sum.js and sum.test.js to run a jest test to check if it works.
- Added this ("test": "jest") under scripts in package.json
- Runs (npm test) in terminal to run the test.

- Runs (npx mrm@2 lint-staged) in terminal.
- Changed to this ("lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}) in package.json.


Configures to use a bundler:
- Installing vite (npm i -D vite)
- Added ("build-vite": "vite build") under scripts in package.json
- Added this (- name: Build Vite
        run: npm run build-vite) to pages.yml under jobs
- Made vite.config.js file
- Made .eslintignore file to ignore dist folder and vite.config.js
- Removed "type": "Module" fro package.json


Delpoyes to Github pages:
- Went to github setting in repo - pages - changed to github actions.
- Went to Actions on github and deployed page, it now deployes manually. (until it is merged to master-branch?)

[![Deploy static content to Pages](https://github.com/marthebull/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/marthebull/social-media-client/actions/workflows/pages.yml)


Cypress testing:

- Installing Cypress (npm install cypress --save-dev)
- Opens Cypress (npx cypress open)
- Didnt get css apllied to localhost, so changed outDir in vite.config.js to ./vite and path in pages.yml to ./vite.
- Installed cypress plugin (npm install eslint-plugin-cypress@latest --save-dev) and added (import "cypress-localstorage-commands";) to e2e. js in support in e2e-folder in cypress-folder.
- ran (npm i --save-dev cypress-localstorage-commands)


