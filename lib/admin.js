"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDTO = exports.CLoginAdminDTO = void 0;
var class_validator_1 = require("class-validator");
var CLoginAdminDTO = /** @class */ (function () {
    function CLoginAdminDTO() {
    }
    return CLoginAdminDTO;
}());
exports.CLoginAdminDTO = CLoginAdminDTO;
var AdminDTO = /** @class */ (function () {
    function AdminDTO() {
    }
    __decorate([
        class_validator_1.IsDefined({ message: "Логин не указано" }),
        class_validator_1.Length(2, 18, { message: "Логин должен содержать от 2 до 18 символов" })
    ], AdminDTO.prototype, "login", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Пароль не указано" }),
        class_validator_1.Length(2, 18, { message: "Пароль должен содержать от 2 до 18 символов" })
    ], AdminDTO.prototype, "password", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Имя не указано" }),
        class_validator_1.Length(2, 18, { message: "Имя должно содержать от 2 до 18 символов" })
    ], AdminDTO.prototype, "firstName", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Фамилия не указана" }),
        class_validator_1.Length(2, 18, { message: "Фамилия должна содержать от 2 до 18 символов" })
    ], AdminDTO.prototype, "lastName", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Отчество не указано" }),
        class_validator_1.Length(2, 18, { message: "Отчество долно содержать от 2 до 18 символов" })
    ], AdminDTO.prototype, "patronymic", void 0);
    return AdminDTO;
}());
exports.AdminDTO = AdminDTO;
