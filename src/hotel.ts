import { IsDefined, IsPhoneNumber } from "class-validator";

export type THotelItem = {
  _id: string;
  name: string;
  description: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: any;
};

export class HotelDTO {
  @IsDefined({ message: "Имя гостиницы не указано" })
  name: string;

  @IsDefined({ message: "Описание гостиницы не указано" })
  description: string;

  @IsDefined({ message: "Номер телефона не указан" })
  @IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
  phone: string;
}
