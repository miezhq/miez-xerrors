'use strict';

const XError = require('./XError');
const XErrorConflict = require('./XErrorConflict');
const XErrorForbidden = require('./XErrorForbidden');
const XErrorNotFound = require('./XErrorNotFound');
const XErrorUnauthorized = require('./XErrorUnauthorized');
const XErrorUnprocessableEntity = require('./XErrorUnprocessableEntity');

module.exports = {
  XError,
  XErrorConflict,
  XErrorForbidden,
  XErrorNotFound,
  XErrorUnauthorized,
  XErrorUnprocessableEntity,
};
