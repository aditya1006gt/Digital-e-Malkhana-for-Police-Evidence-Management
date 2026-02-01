export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly OFFICER: "OFFICER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const CaseStatus: {
    readonly PENDING: "PENDING";
    readonly DISPOSED: "DISPOSED";
};
export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus];
export declare const SeizureNature: {
    readonly RECOVERED: "RECOVERED";
    readonly SEIZED: "SEIZED";
    readonly ABANDONED: "ABANDONED";
};
export type SeizureNature = (typeof SeizureNature)[keyof typeof SeizureNature];
export declare const OwnerType: {
    readonly ACCUSED: "ACCUSED";
    readonly COMPLAINANT: "COMPLAINANT";
    readonly VICTIM: "VICTIM";
    readonly UNKNOWN: "UNKNOWN";
};
export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];
export declare const Category: {
    readonly ELECTRONICS: "ELECTRONICS";
    readonly WEAPON: "WEAPON";
    readonly VEHICLE: "VEHICLE";
    readonly CASH: "CASH";
    readonly NARCOTICS: "NARCOTICS";
    readonly DOCUMENTS: "DOCUMENTS";
    readonly OTHER: "OTHER";
};
export type Category = (typeof Category)[keyof typeof Category];
export declare const PropStatus: {
    readonly IN_CUSTODY: "IN_CUSTODY";
    readonly DISPOSED: "DISPOSED";
};
export type PropStatus = (typeof PropStatus)[keyof typeof PropStatus];
export declare const DisposalType: {
    readonly AUCTION: "AUCTION";
    readonly DESTROYED: "DESTROYED";
    readonly RETURNED: "RETURNED";
    readonly TRANSFERRED: "TRANSFERRED";
};
export type DisposalType = (typeof DisposalType)[keyof typeof DisposalType];
//# sourceMappingURL=enums.d.ts.map