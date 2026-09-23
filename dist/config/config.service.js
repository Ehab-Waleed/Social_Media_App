"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const dotenv_1 = require("dotenv");
const node_path_1 = require("node:path");
const NODE_ENV = process.env.NODE_ENV;
(0, dotenv_1.config)({
    path: (0, node_path_1.resolve)(`.env.${NODE_ENV}`)
});
exports.PORT = Number(process.env.PORT);
