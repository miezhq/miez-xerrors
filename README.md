# Miez - XErrors

A collection of custom errors

## Getting started

The quickest way to get started using the helper classes is to install them via `npm`:

```bash

$ npm install @miez/xerrors --save

```

```javascript

const XErrorNotFound = require('@miez/xerrros/XErrorNotFound');

function doSomething(data) {
  if (!data) {
    throw new XErrorNotFound();
  }
}

```


To start using an available helper class please visit the necessary folder for further instructions.

## Available Error classes

- `XErrror` - base error class that extends `Error` rest of the custom classes inherit from this
- `XErrorConflict`
- `XErrorForbidden`
- `XErrorNotFound`
- `XErrorUnauthorized`
- `XErrorUnprocessableEntity`

## License

[MIT](https://github.com/miezhq/miez-helpers/blob/master/LICENSE)
