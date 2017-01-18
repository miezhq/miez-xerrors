'use strict';

class XError extends Error {
  constructor(message, type, status) {
    super();
    this.message = message;
    this.type = (type) ?  type.toUpperCase() : 'GENERAL_ERROR';
    this.status = status || 500;
    this.name = this.constructor.name;

    Error.captureStackTrace(this);
  }
}

module.exports = XError;
