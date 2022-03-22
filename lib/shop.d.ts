import { TShopCategoryItem } from "./shops-category";
export declare type TShopItem = {
    Id: string;
    name: string;
    ShoppingStore_Id: string;
    ShoppingCenter_Id: string;
    floor: string;
};
export interface TShopDetails extends TShopItem {
    _id: string;
    categories: TShopCategoryItem[];
    image?: string;
    brand?: string;
    describe?: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=shop.d.ts.map