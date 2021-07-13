# TUT-REACT-CLOTHING

## Start App

```shell
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
