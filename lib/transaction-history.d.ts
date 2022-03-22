export declare type THistoryItem = {
    Id: string;
    Date: Date;
    Active: number;
    type: number;
    Klient_Id: string;
    ShoppingStore_Id: string;
    Pavilion_Id: string;
    LoyaltyCard_Id: number;
    LoyaltyProgram_Id: string;
    Summa: number;
    Bonus: number;
};
export declare type TBalance = {
    LoyaltyCard_Id: number;
    LoyaltyProgram_Id: string;
    balance: number;
};
//# sourceMappingURL=transaction-history.d.ts.map