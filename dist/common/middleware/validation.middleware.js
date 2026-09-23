"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const globalErrHandler_middleware_1 = __importDefault(require("./globalErrHandler.middleware"));
const validation = (schema) => {
    return async (req, res, next) => {
        let errorDetails = [];
        for (const key of Object.keys(schema)) {
            if (!schema[key])
                continue;
            const result = await schema[key].safeParseAsync(req[key]);
            if (!result.success) {
                errorDetails.push({
                    key,
                    path: result?.error,
                    message: result?.error?.message,
                });
            }
            if (errorDetails?.length) {
                throw new globalErrHandler_middleware_1.default(JSON.parse(errorDetails));
            }
        }
    };
};
exports.validation = validation;
