export declare class CLoginAdminDTO {
    login: string;
    password: string;
    type: string;
    role: string;
}
export declare class AdminDTO {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    type: string;
    role: string;
    lastVisit: Date;
}
export declare type TAdminItem = {
    _id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    photo: string;
    email: string;
    role: string;
    login: string;
    password: string;
    type: string;
    lastVisit: Date;
    createdAt: Date;
    updatedAt: Date;
    __v?: any;
};
//# sourceMappingURL=admin.d.ts.map