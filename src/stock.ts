import { IsDefined } from "class-validator";

export type TStockItem = {
  _id: string;
  title: string;
  description: string;
  toDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

export class StockDTO {
  @IsDefined({ message: "Имя акции не указано" })
  title: string;
  @IsDefined({ message: "Описание акции не указано" })
  description: string;
  toDate: Date;
}
