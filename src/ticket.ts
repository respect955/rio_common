import { IsDefined } from "class-validator";
import {THotelItem} from "./hotel";

export class TicketDTO {
  @IsDefined({ message: "Пожалуйста, укажите тему обращения" })
  title: string;

  @IsDefined({ message: "Пожалуйста, добавите подробное описание" })
  message: string;

  @IsDefined({ message: "Пожалуйста, добавьте роль" })
  role: string;

  hotel?: any;
}

export class TicketMessageDTO {
  @IsDefined({ message: "Не выбрано обращение" })
  ticketId: TTicketItem["_id"];

  @IsDefined({ message: "Не указан текст сообщения" })
  message: string;
}

export type TTicketMessage = {
  _id: string;
  creator: string;
  message: string;
  createdAt: Date;
};

export type TTicketItem = {
  _id: string;
  id: number;
  creator: string;
  messages: TTicketMessage[];
  createdAt: Date;
  hotel?: any;
  role: string;
  title: string;
  isNewTicket: boolean;
  haveNewMessages: boolean;
};
