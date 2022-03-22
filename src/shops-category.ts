import { IsDefined } from "class-validator";

export class ShopCategoryDTO {
  @IsDefined({ message: "Не указано имя катеории" })
  name: string;
}

export type TShopCategoryItem = {
  _id: string;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: any;
};
