'use strict';

const XError = require('./XError');

class XErrorForbidden extends XError {
  constructor(message, type) {
    super();
    this.status = 403;
    this.type = type || 'FORBIDDEN';
    this.message = message || 'Forbidden';
  }
}

module.exports = XErrorForbidden;
