// Types
export type {
  TResponseWithId,
  TSendCodeRespons,
  TWithMessageResponse,
} from "./auth";
export type { IClient, TGender } from "./user";
export type { TCard } from "./card";
export type {
  TCarouselItem,
  TBonus,
  TBonusIcon,
  TCardMotivationItem,
  TProposalItem,
} from "./content";
export type { TShopItem, TShopDetails } from "./shop";
export type { TResponseWithTableName, TResponseWithMessage } from "./root";
export type { TAvatar } from "./avatar";
export type { THistoryItem, TBalance } from "./transaction-history";
export type { TNotification } from "./notifications";
export type { TRestaurant } from "./restaurant";
export type { TEvent } from "./event";
export type { TCafe } from "./cafe";
export type { TService } from "./service";
export type { TNews } from "./news";
export type { THotelItem } from "./hotel";
export type { TAdminItem } from "./admin";
export type { TTicketItem, TTicketMessage } from "./ticket";
export type { TShopCategoryItem } from "./shops-category";
export type { TStockItem } from "./stock";
export type { THotelRequisitionItem } from "./hotel-requisition";

// Classes
export { CSendCodeDTO, CSendSMSDTO, CJWTPayloadDTO } from "./auth";
export { CUpdateUserDTO } from "./user";
export { CLoginAdminDTO, AdminDTO } from "./admin";
export { CCreateCarouselDTO, CreateProposalDTO } from "./content";
export { NotificationsDTO } from "./notifications";
export { RestaurantDTO } from "./restaurant";
export { EventDTO } from "./event";
export { CafeDTO } from "./cafe";
export { ServiceDTO } from "./service";
export { NewsDTO } from "./news";
export { HotelDTO } from "./hotel";
export { HotelRequisitionDTO } from "./hotel-requisition";
export { TicketMessageDTO, TicketDTO } from "./ticket";
export { ShopCategoryDTO } from "./shops-category";
export { StockDTO } from "./stock";
