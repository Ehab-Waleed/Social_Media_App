"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../DB/models/user.model"));
class AuthService {
    _userModel = user_model_1.default;
    constructor() { }
    signUp = async (req, res, next) => {
        let { fname, lname, email, password, phone, age, gender } = req.body;
        const user = await this._userModel.create({ fname, lname, email, password, phone, age, gender });
        res.status(201).json({
            message: "done", user
        });
    };
    signIn = async (req, res, next) => { };
}
exports.default = new AuthService();
