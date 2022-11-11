Course assignment for workflow


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
- 






The following workflows/hooks are required:

-Project is configured to run Prettier on commit
-Project is configured to run ESLint on commit
-Project is configured to run Jest on commit
-Project is configured to deploy to pages on merge to default

The following file changes are required:

-Project readme file is updated to include new configuration information and status badges
-Project is configured for hosting (e.g. CDN links or a Bundler)

The following features must be automatically tested with unit tests:

The login function returns a valid token when provided with valid credentials
The logout function clears the token from browser storage
The create item function creates a new item on the API
The following features must be automatically tested with end-to-end tests:

The login form validates user inputs correctly based on API restrictions
The create item form validates user inputs correctly based on API restrictions
The logout button logs the user out when clicked