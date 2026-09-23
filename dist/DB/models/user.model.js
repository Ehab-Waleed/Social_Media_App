"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_enum_1 = require("../../common/enums/user.enum");
const userSchema = new mongoose_1.default.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 20,
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: function () {
            return this.provider === user_enum_1.userProvider.system;
        },
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    age: {
        type: Number,
        required: function () {
            return this.provider === user_enum_1.userProvider.system;
        },
        min: 18,
        max: 60,
    },
    gender: {
        type: String,
        required: true,
        enum: Object.keys(user_enum_1.userGender),
        default: user_enum_1.userGender.male,
        trim: true,
    },
    provider: {
        type: String,
        required: true,
        enum: Object.keys(user_enum_1.userProvider),
        default: user_enum_1.userProvider.system,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        enum: Object.keys(user_enum_1.userRole),
        default: user_enum_1.userRole.user,
        trim: true,
    },
    isConfirmed: Boolean,
    profilePic: {
        type: String,
    },
    changeCredentials: Date,
}, {
    timestamps: true,
    strict: true,
    strictQuery: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
userSchema.virtual("FullName").get(function () {
    return `${this.fname} ${this.lname}`;
});
const userModel = mongoose_1.default.models.User || mongoose_1.default.model("User", userSchema);
exports.default = userModel;
