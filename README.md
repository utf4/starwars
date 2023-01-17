# Getting Started

This app uses [Starwars](https://www.back4app.com/database/davimacedo/swapi-star-wars-api) API to render Movies and with their characters and planets.

## Prerequisites
- NodeJS (16.x)

## Setup
- Run `npm install` to install dependencies.
- Put your starwars API config variables in ./Utils/Constants.js.
- Run `npm run compile` to fetch schema from [Starwars](https://www.back4app.com/database/davimacedo/swapi-star-wars-api) graphql API.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm run lint`

Finds for code base problems if any.

### `npm run lint:fix`

Finds for code base problems and fix them according to configurations.

### `npm run format`

Finds for code style problems and fix them according to prettier configurations.

### `npm run compile`

Fetch auto generated schema from [Starwars](https://www.back4app.com/database/davimacedo/swapi-star-wars-api) graphql api.
