# Nucleotid

Share your sequencing samples and protocols with your team or the scientific comunity.

## Starting the dev server

Make sure you have the latest Stable or LTS version of Node.js installed.

1. `git clone https://github.com/palicode/dafront`
2. Run `cd dafront`
2. Run `yarn install`
3. Start the dev server using `npm start` or `yarn start`
3. It will open your application on [http://localhost:8080](http://localhost:8080)

## Available Commands

- `yarn start` - start the dev server
- `yarn lint` - execute an eslint check
- `yarn test` - run all tests
- `yarn test:watch` - run all tests in watch mode
- `yarn coverage` - generate code coverage report in the `coverage` folder
- `yarn build` - create a production ready build in `dist` folder


> You can also use `npm run` instead of `yarn`.

Also, precommit and prepush are both enabled to check all the code is tested, linted and has coverage enought.
