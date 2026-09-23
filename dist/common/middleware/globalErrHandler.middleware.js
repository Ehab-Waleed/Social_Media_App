"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.default = AppError;
