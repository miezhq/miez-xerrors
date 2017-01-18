'use strict';

const XError = require('./XError');

class XErrorConflict extends XError {
  constructor(message) {
    super();
    this.status = 409;
    this.type = 'CONFLICT';
    this.message = message || 'Conflict';
  }
}

module.exports = XErrorConflict;
