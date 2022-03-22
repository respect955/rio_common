export declare type TCarouselItem = {
    image: string;
    id: string;
    title: string;
    description: string;
};
export declare class CCreateCarouselDTO {
    title: string;
    description: string;
}
export declare type TBonusIcon = {
    type: "coins" | "socks" | "strawberry";
};
export declare type TBonus = {
    id: string;
    name: string;
    count: number;
    icon: TBonusIcon;
};
export declare type TCardMotivationItem = {
    id: string;
    title: string;
    place: number;
    desctibe: string;
    price: number;
    image: string;
};
export declare type TProposalItem = {
    title: string;
    subTitle?: string;
    image: string;
    id: string;
};
export declare class CreateProposalDTO {
    title: string;
    subTitle?: string;
}
//# sourceMappingURL=content.d.ts.map