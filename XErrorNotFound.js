'use strict';

const XError = require('./XError');

class XErrorNotFound extends XError {
  constructor(message) {
    super();
    this.status = 404;
    this.type = 'NOT_FOUND';
    this.message = message || 'Not found';
  }
}

module.exports = XErrorNotFound;
