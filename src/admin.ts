import { IsDefined, Length, IsEnum } from "class-validator";

export class CLoginAdminDTO {
  login: string;
  password: string;
  type: string;
  role: string;
}

export class AdminDTO {
  @IsDefined({ message: "Логин не указано" })
  @Length(2, 18, { message: "Логин должен содержать от 2 до 18 символов" })
  login: string;

  @IsDefined({ message: "Пароль не указано" })
  @Length(2, 18, { message: "Пароль должен содержать от 2 до 18 символов" })
  password: string;

  @IsDefined({ message: "Имя не указано" })
  @Length(2, 18, { message: "Имя должно содержать от 2 до 18 символов" })
  firstName: string;

  @IsDefined({ message: "Фамилия не указана" })
  @Length(2, 18, { message: "Фамилия должна содержать от 2 до 18 символов" })
  lastName: string;

  @IsDefined({ message: "Отчество не указано" })
  @Length(2, 18, { message: "Отчество долно содержать от 2 до 18 символов" })
  patronymic: string;

  type: string;
  role: string;
  lastVisit: Date;
}

export type TAdminItem = {
  _id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  photo: string;
  email: string;
  role: string;
  login: string;
  password: string;
  type: string;
  lastVisit: Date;
  createdAt: Date;
  updatedAt: Date;
  __v?: any;
};
