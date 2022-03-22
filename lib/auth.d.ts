export declare type TResponseWithId = {
    Id: string;
};
export declare type TSendCodeRespons = {
    token: string;
};
export declare class CSendSMSDTO {
    phone: string;
}
export declare type TWithMessageResponse = {
    message: string;
};
export declare class CSendCodeDTO {
    phone: string;
    code: string;
}
export declare class CJWTPayloadDTO {
    id: string;
    phone: string;
    type: string;
    role: string;
}
//# sourceMappingURL=auth.d.ts.map