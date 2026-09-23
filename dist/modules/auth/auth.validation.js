"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const user_enum_1 = require("../../common/enums/user.enum");
exports.signUpSchema = {
    body: zod_1.default.strictObject({
        fName: zod_1.default.string().min(2).max(10),
        lName: zod_1.default.string().min(2).max(10),
        email: zod_1.default.email(),
        password: zod_1.default.string(),
        phone: zod_1.default.string().optional(),
        address: zod_1.default.string().optional(),
        age: zod_1.default.number().min(18).max(60).positive(),
        gender: zod_1.default.enum(user_enum_1.userGender).optional(),
    }),
};
