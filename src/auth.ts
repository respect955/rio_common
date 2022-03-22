import { IsDefined, IsPhoneNumber, Length } from "class-validator";

export type TResponseWithId = {
  Id: string;
};

export type TSendCodeRespons = {
  token: string;
};

export class CSendSMSDTO {
  @IsDefined({ message: "Номер телефона не указан" })
  @IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
  phone: string;
}

export type TWithMessageResponse = {
  message: string;
};

export class CSendCodeDTO {
  @IsDefined({ message: "Номер телефона не указан" })
  @IsPhoneNumber("RU", { message: "Некорректный номер телефона" })
  phone: string;

  @IsDefined({ message: "Код не указан" })
  @Length(6, 6, { message: "Некорректный код" })
  code: string;
}

export class CJWTPayloadDTO {
  @IsDefined({ message: "Нет данных: идентификатор" })
  id: string;
  @IsDefined({ message: "Нет данных: номер" })
  phone: string;
  @IsDefined({ message: "Нужен тип" })
  type: string;
  @IsDefined({ message: "Нужна роль" })
  role: string;
}
