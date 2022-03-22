import { Transform } from "class-transformer";
import {
  IsDate,
  IsDateString,
  IsDefined,
  IsPhoneNumber,
  Length,
} from "class-validator";
import { TResponseWithId } from "./auth";

export interface IClient extends TResponseWithId {
  name: string;
  phone: string;
  BirthDay: Date;
  RegistrationDay: Date;
  Email: string;
  gender: TGender;
  Manager_Id: string;
  LoyaltyCard_Id: number;
  Sendings: string;
  Klient_Type: string;
  KlientFamily: string;
  KlientName: string;
  KlientSecondName: string;
}

export class CUpdateUserDTO {
  @IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
  Phone: string;

  @Length(2, 18, { message: "Фамилия должна содержать от 2 до 18 символов" })
  KlientFamily: string;

  @Length(2, 18, { message: "Имя должно содержать от 2 до 18 символов" })
  KlientName: string;

  @Length(2, 18, { message: "Отчество должно содержать от 2 до 18 символов" })
  KlientSecondName: string;

  @IsDateString({}, { message: "Некорректная дата" })
  BirthDay: string;

  @IsDefined()
  Gender: TGender;

  Sendings: string[];
}

export type TGender = "Мужчина" | "Женщина";
