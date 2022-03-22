import { TResponseWithId } from "./auth";
export interface IClient extends TResponseWithId {
    name: string;
    phone: string;
    BirthDay: Date;
    RegistrationDay: Date;
    Email: string;
    gender: TGender;
    Manager_Id: string;
    LoyaltyCard_Id: number;
    Sendings: string;
    Klient_Type: string;
    KlientFamily: string;
    KlientName: string;
    KlientSecondName: string;
}
export declare class CUpdateUserDTO {
    Phone: string;
    KlientFamily: string;
    KlientName: string;
    KlientSecondName: string;
    BirthDay: string;
    Gender: TGender;
    Sendings: string[];
}
export declare type TGender = "Мужчина" | "Женщина";
//# sourceMappingURL=user.d.ts.map