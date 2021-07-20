# TUT-REACT-CLOTHING

## Start App

```shell
yarn
yarn start
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
```

## Reselect / Memoization

```shell
yarn add reselect

# memoize helper function
yarn add lodash.memoize
```
