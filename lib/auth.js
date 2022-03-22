"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CJWTPayloadDTO = exports.CSendCodeDTO = exports.CSendSMSDTO = void 0;
var class_validator_1 = require("class-validator");
var CSendSMSDTO = /** @class */ (function () {
    function CSendSMSDTO() {
    }
    __decorate([
        class_validator_1.IsDefined({ message: "Номер телефона не указан" }),
        class_validator_1.IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
    ], CSendSMSDTO.prototype, "phone", void 0);
    return CSendSMSDTO;
}());
exports.CSendSMSDTO = CSendSMSDTO;
var CSendCodeDTO = /** @class */ (function () {
    function CSendCodeDTO() {
    }
    __decorate([
        class_validator_1.IsDefined({ message: "Номер телефона не указан" }),
        class_validator_1.IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
    ], CSendCodeDTO.prototype, "phone", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Код не указан" }),
        class_validator_1.Length(6, 6, { message: "Некорректный код" })
    ], CSendCodeDTO.prototype, "code", void 0);
    return CSendCodeDTO;
}());
exports.CSendCodeDTO = CSendCodeDTO;
var CJWTPayloadDTO = /** @class */ (function () {
    function CJWTPayloadDTO() {
    }
    __decorate([
        class_validator_1.IsDefined({ message: "Нет данных: идентификатор" })
    ], CJWTPayloadDTO.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Нет данных: номер" })
    ], CJWTPayloadDTO.prototype, "phone", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Нужен тип" })
    ], CJWTPayloadDTO.prototype, "type", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Нужна роль" })
    ], CJWTPayloadDTO.prototype, "role", void 0);
    return CJWTPayloadDTO;
}());
exports.CJWTPayloadDTO = CJWTPayloadDTO;
