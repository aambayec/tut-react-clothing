# TUT-REACT-CLOTHING

See live at <https://aambayec-clothing.herokuapp.com>

## Start App

Client (only)

```shell
cd client
yarn
yarn start
```

Client and Backend

```shell
npm i -g nodemon
yarn dev
```

## SASS

Check [Node version support policy](https://www.npmjs.com/package/node-sass)

```shell
# check your node version
nvm version

# e.g. if you have node v14.17.1 you should install node-sass v4.14.1

yarn add node-sass # or yarn add node-sass@4.14.1
```

## Updating Packages + Latest Version of React

### Using Yarn

```shell
yarn upgrade
```

## Using NPM

```shell
# Update all of the dependencies
npm update -D 

# If you see some vulnerabilities run:
npm audit fix
# then
npm install
```

## React Router DOM

Installation

```shell
yarn add react-router-dom
```

`withRouter` is a Higher Order Component (HOC) - a function that takes a component and returns a new component. It adds the routing related props to the new component.



## Troubleshooting Package Dependencies

E.g One package requires a specific version of babel-jest, add "resolutions" in `package.json`.

```json
"resolutions": {
    "babel-jest": "24.7.1", 
}
```

## [Firebase](https://console.firebase.google.com/)

1. Create new project in firebase.
2. Create new `</> web platform` in your firebase project.
3. Take note of the SDK firebase config.
4. Add `Authentication` with `google sign in provider` and `Email/Password`.
5. Install firebase in your project source code.

    ```shell
    yarn add firebase
    ```

6. See code implementations in `src/firebase`.

## Redux

```shell
yarn add redux redux-logger react-redux
yarn add redux-persist
yarn add redux-thunk
yarn add redux-saga
```

## Reselect / Memoization

```shell
yarn add reselect

# memoize helper function
yarn add lodash.memoize
```

## Stripe Checkout

```shell
yarn add react-stripe-checkout
```

Test credit card for payments:
NO: 4242 4242 4242 4242
EXP: 10/29
CW: 123

## Deploying in [Heroku](https://dashboard.heroku.com/)

Installing Heroku and Login

```shell
curl https://cli-assets.heroku.com/install.sh | sh
heroku --version
heroku login
```

Project Setup

```shell
heroku create aambayec-clothing --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku main

# optional: heroku force push
git push heroku main --force

heroku config:set STRIPE_SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxx

heroku open
```

Linking Github to Heroku
<https://devcenter.heroku.com/articles/github-integration>

Relinking a Heroku Git Project

```shell
# Get your app name here
heroku apps

# Setup git remote
heroku git:remote -a <heroku-app-name>
```

Get/Remove Heroku buildpacks

```shell
# get
heroku buildpacks
#remove
heroku buildpacks:remove https://github.com/mars/create-react-app-buildpack.git
```

## Styled Components

```shell
yarn add styled-components
```
