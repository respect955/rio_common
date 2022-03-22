"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRequisitionDTO = void 0;
var class_validator_1 = require("class-validator");
var HotelRequisitionDTO = /** @class */ (function () {
    function HotelRequisitionDTO() {
    }
    __decorate([
        class_validator_1.IsDefined({ message: "Имя не указано" })
    ], HotelRequisitionDTO.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Фамилия не указана" })
    ], HotelRequisitionDTO.prototype, "surname", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Отчество не указано" })
    ], HotelRequisitionDTO.prototype, "patronymic", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Количество человек не указано" })
    ], HotelRequisitionDTO.prototype, "people", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Количество дней не указано" })
    ], HotelRequisitionDTO.prototype, "days", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Время не указано" })
    ], HotelRequisitionDTO.prototype, "datetime", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Тип номера не указано" })
    ], HotelRequisitionDTO.prototype, "typeNumber", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Номер телефона не указан" }),
        class_validator_1.IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
    ], HotelRequisitionDTO.prototype, "phone", void 0);
    return HotelRequisitionDTO;
}());
exports.HotelRequisitionDTO = HotelRequisitionDTO;
