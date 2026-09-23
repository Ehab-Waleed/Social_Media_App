"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_service_1 = require("../config/config.service");
const DB_uri = config_service_1.DB_URI;
const connectionDB = async () => {
    await mongoose_1.default
        .connect(DB_uri)
        .then(() => {
        console.log(`DB Connected Successfully to ${DB_uri}`);
    })
        .catch((err) => {
        console.log("Failed To Connect DB", err);
    });
};
exports.default = connectionDB;
