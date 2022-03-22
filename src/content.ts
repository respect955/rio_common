import { IsDefined } from "class-validator";

export type TCarouselItem = {
  image: string;
  id: string;
  title: string;
  description: string;
};

export class CCreateCarouselDTO {
  @IsDefined({ message: "Заголовок не указан" })
  title: string;

  @IsDefined({ message: "Не указано описание" })
  description: string;
}

export type TBonusIcon = {
  type: "coins" | "socks" | "strawberry";
};

export type TBonus = {
  id: string;
  name: string;
  count: number;
  icon: TBonusIcon;
};

export type TCardMotivationItem = {
  id: string;
  title: string;
  place: number;
  desctibe: string;
  price: number;
  image: string;
};

export type TProposalItem = {
  title: string;
  subTitle?: string;
  image: string;
  id: string;
};

export class CreateProposalDTO {
  @IsDefined({ message: "Не указан заголовок" })
  title: string;

  subTitle?: string;
}
