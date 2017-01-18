'use strict';

const XError = require('./XError');

class XErrorUnprocessableEntity extends XError {
  constructor(message, type) {
    super();
    this.status = 422;
    this.type = type || 'UNPROCESSABLE_ENTITY';
    this.message = message || 'Unprocessable Entity';
  }
}

module.exports = XErrorUnprocessableEntity;
