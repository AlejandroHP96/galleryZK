# reactVite

## [Alejandro Herrera Pestana](https://www.linkedin.com/in/alejandro-herrera-pestana-50163b234/)

### Instructions to build dev environment

```shell
#npm

$ npm install

$ npm dev #start project

#yarn

$ yarn install

$ yarn dev #start project

```

### Instructions to build production environment

```shell

#npm

$ npm build

#yarn

$ yarn build
```

The production-ready build is the "dist" folder

### Instructions to add eslint configuration

Install

### Instructions to add prettier configuration

Install

### Instructions to add Testing

Install

### Use "jest" to testing functions

Install

```shell

#npm

npm install --save-dev jest

#yarn

yarn add --dev jest

```

add the following section to your ` package.json`

```shell
{
  "scripts": {
    "test": "jest"
  }
}
```

### Using Babel

Install

```shell

#npm

npm install --save-dev babel-jest @babel/core @babel/preset-env

#yarn

yarn add --dev babel-jest @babel/core @babel/preset-env
```

### If you will use TypeScript

Install

```shell

#npm

npm install --save-dev @babel/preset-typescript

#yarn

yarn add --dev @babel/preset-typescript

```

Then add `@babel/preset-typescript` to the list of presets in your `babel.config.js`.

```shell

  module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
};
```

## Example Test Jest

Let's get started by writing a test, create a `sum.js` file:

```shell
  export const sum = (a,b) => {
    return a + b
  }
```

Then, create a file named `sum.test.js`. This will contain our actual test:

```shell
  const sum = require('./sum');

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
```

Finally, run `yarn  test` or `npm test` and Jest will print this message:

```shell

  PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)

```
