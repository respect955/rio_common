import { IsDefined, IsPhoneNumber } from "class-validator";

export type THotelRequisitionItem = {
    _id: string;
    name: string;
    surname: string;
    patronymic: string;
    people: number;
    days: string;
    datetime: Date;
    typeNumber: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    __v?: any;
};

export class HotelRequisitionDTO {
    @IsDefined({ message: "Имя не указано" })
    name: string;

    @IsDefined({ message: "Фамилия не указана" })
    surname: string;

    @IsDefined({ message: "Отчество не указано" })
    patronymic: string;

    @IsDefined({ message: "Количество человек не указано" })
    people: number;

    @IsDefined({ message: "Количество дней не указано" })
    days: string;

    @IsDefined({ message: "Время не указано" })
    datetime: Date;

    @IsDefined({ message: "Тип номера не указано" })
    typeNumber: string;

    @IsDefined({ message: "Номер телефона не указан" })
    @IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
    phone: string;
}
