'use strict';

const XError = require('./XError');

class XErrorUnauthorized extends XError {
  constructor(message) {
    super();
    this.status = 401;
    this.type = 'UNAUTHORIZED';
    this.message = message || 'Unauthorized';
  }
}

module.exports = XErrorUnauthorized;
