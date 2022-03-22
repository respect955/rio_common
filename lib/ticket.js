"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketMessageDTO = exports.TicketDTO = void 0;
var class_validator_1 = require("class-validator");
var TicketDTO = /** @class */ (function () {
    function TicketDTO() {
    }
    __decorate([
        class_validator_1.IsDefined({ message: "Пожалуйста, укажите тему обращения" })
    ], TicketDTO.prototype, "title", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Пожалуйста, добавите подробное описание" })
    ], TicketDTO.prototype, "message", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Пожалуйста, добавьте роль" })
    ], TicketDTO.prototype, "role", void 0);
    return TicketDTO;
}());
exports.TicketDTO = TicketDTO;
var TicketMessageDTO = /** @class */ (function () {
    function TicketMessageDTO() {
    }
    __decorate([
        class_validator_1.IsDefined({ message: "Не выбрано обращение" })
    ], TicketMessageDTO.prototype, "ticketId", void 0);
    __decorate([
        class_validator_1.IsDefined({ message: "Не указан текст сообщения" })
    ], TicketMessageDTO.prototype, "message", void 0);
    return TicketMessageDTO;
}());
exports.TicketMessageDTO = TicketMessageDTO;
