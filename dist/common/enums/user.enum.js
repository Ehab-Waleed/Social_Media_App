"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = exports.userRole = exports.userGender = void 0;
var userGender;
(function (userGender) {
    userGender["male"] = "male";
    userGender["female"] = "female";
})(userGender || (exports.userGender = userGender = {}));
var userRole;
(function (userRole) {
    userRole["user"] = "user";
    userRole["admin"] = "admin";
})(userRole || (exports.userRole = userRole = {}));
var userProvider;
(function (userProvider) {
    userProvider["system"] = "system";
    userProvider["google"] = "google";
})(userProvider || (exports.userProvider = userProvider = {}));
