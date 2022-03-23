# Wiki Helper

This project uses Wikipedia's API to generate a list of most viewed articles.

## Potential Enhancements

Future enhancements may include, but are not limited to:

1. More test cases using React Testing Library
2. Smaller bundle size using applicable Babel plugins like `babel-plugin-styled-components`
3. Scripts running during pre-commit and pre-push (linting, testing, prettier)
4. Deployment pipeline that manages releases and changelog generation
5. A more robust architecture, potentially utilizing a combination of a feature and domain-driven approach, if this app were to scale

## Usage

To run the app, simply clone the repo and run `yarn install`. Then, run `yarn start`.

## Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
