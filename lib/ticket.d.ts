export declare class TicketDTO {
    title: string;
    message: string;
    role: string;
    hotel?: any;
}
export declare class TicketMessageDTO {
    ticketId: TTicketItem["_id"];
    message: string;
}
export declare type TTicketMessage = {
    _id: string;
    creator: string;
    message: string;
    createdAt: Date;
};
export declare type TTicketItem = {
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
//# sourceMappingURL=ticket.d.ts.map