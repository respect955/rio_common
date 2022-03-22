"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUpdateUserDTO = void 0;
var class_validator_1 = require("class-validator");
var CUpdateUserDTO = /** @class */ (function () {
    function CUpdateUserDTO() {
    }
    __decorate([
        class_validator_1.IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
    ], CUpdateUserDTO.prototype, "Phone", void 0);
    __decorate([
        class_validator_1.Length(2, 18, { message: "Фамилия должна содержать от 2 до 18 символов" })
    ], CUpdateUserDTO.prototype, "KlientFamily", void 0);
    __decorate([
        class_validator_1.Length(2, 18, { message: "Имя должно содержать от 2 до 18 символов" })
    ], CUpdateUserDTO.prototype, "KlientName", void 0);
    __decorate([
        class_validator_1.Length(2, 18, { message: "Отчество должно содержать от 2 до 18 символов" })
    ], CUpdateUserDTO.prototype, "KlientSecondName", void 0);
    __decorate([
        class_validator_1.IsDateString({}, { message: "Некорректная дата" })
    ], CUpdateUserDTO.prototype, "BirthDay", void 0);
    __decorate([
        class_validator_1.IsDefined()
    ], CUpdateUserDTO.prototype, "Gender", void 0);
    return CUpdateUserDTO;
}());
exports.CUpdateUserDTO = CUpdateUserDTO;
