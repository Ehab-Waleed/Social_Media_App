"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const config_service_1 = require("./config/config.service");
const globalErrHandler_middleware_1 = __importDefault(require("./common/middleware/globalErrHandler.middleware"));
const app = (0, express_1.default)();
const port = config_service_1.PORT;
const bootstrap = async () => {
    const limiter = (0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: "Too many requests from this IP, please try again after 15 minutes",
        legacyHeaders: false,
        skipFailedRequests: true,
    });
    app.use((0, cors_1.default)(), (0, helmet_1.default)(), limiter, express_1.default.json());
    app.get("/", (req, res, next) => {
        res.status(200).json({ message: "Welcome on my Social Media App ^^" });
    });
    app.use("{/*demo}", (req, res, next) => {
        throw new globalErrHandler_middleware_1.default(`Url: ${req.originalUrl} With Method: ${req.method} Not Found`, 404);
    });
    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        res.status(statusCode).json({
            message: err.message,
            statusCode,
            stack: err.stack,
        });
    });
};
app.listen(port, () => console.log(`Social Media app listening on port ${port}!`));
exports.default = bootstrap;
