import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly CaseRecord: "CaseRecord";
    readonly Property: "Property";
    readonly CustodyLog: "CustodyLog";
    readonly Disposal: "Disposal";
    readonly ScanLog: "ScanLog";
    readonly Conversation: "Conversation";
    readonly Message: "Message";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly username: "username";
    readonly password: "password";
    readonly firstname: "firstname";
    readonly lastname: "lastname";
    readonly rank: "rank";
    readonly stationId: "stationId";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly profilepic: "profilepic";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CaseRecordScalarFieldEnum: {
    readonly id: "id";
    readonly policeStation: "policeStation";
    readonly ioName: "ioName";
    readonly ioId: "ioId";
    readonly crimeNumber: "crimeNumber";
    readonly crimeYear: "crimeYear";
    readonly firDate: "firDate";
    readonly seizureDate: "seizureDate";
    readonly actLaw: "actLaw";
    readonly sectionLaw: "sectionLaw";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly userId: "userId";
};
export type CaseRecordScalarFieldEnum = (typeof CaseRecordScalarFieldEnum)[keyof typeof CaseRecordScalarFieldEnum];
export declare const PropertyScalarFieldEnum: {
    readonly id: "id";
    readonly category: "category";
    readonly belongingTo: "belongingTo";
    readonly nature: "nature";
    readonly quantity: "quantity";
    readonly location: "location";
    readonly description: "description";
    readonly photoUrl: "photoUrl";
    readonly qrCodeImage: "qrCodeImage";
    readonly qrString: "qrString";
    readonly status: "status";
    readonly caseId: "caseId";
};
export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum];
export declare const CustodyLogScalarFieldEnum: {
    readonly id: "id";
    readonly fromOfficer: "fromOfficer";
    readonly toOfficer: "toOfficer";
    readonly purpose: "purpose";
    readonly remarks: "remarks";
    readonly movedAt: "movedAt";
    readonly propertyId: "propertyId";
};
export type CustodyLogScalarFieldEnum = (typeof CustodyLogScalarFieldEnum)[keyof typeof CustodyLogScalarFieldEnum];
export declare const DisposalScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly courtOrderRef: "courtOrderRef";
    readonly disposedAt: "disposedAt";
    readonly remarks: "remarks";
    readonly propertyId: "propertyId";
};
export type DisposalScalarFieldEnum = (typeof DisposalScalarFieldEnum)[keyof typeof DisposalScalarFieldEnum];
export declare const ScanLogScalarFieldEnum: {
    readonly id: "id";
    readonly scannedAt: "scannedAt";
    readonly userId: "userId";
    readonly propertyId: "propertyId";
    readonly deviceInfo: "deviceInfo";
};
export type ScanLogScalarFieldEnum = (typeof ScanLogScalarFieldEnum)[keyof typeof ScanLogScalarFieldEnum];
export declare const ConversationScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly participantOneId: "participantOneId";
    readonly participantTwoId: "participantTwoId";
    readonly conversationKey: "conversationKey";
    readonly lastMessageAt: "lastMessageAt";
    readonly lastMessageId: "lastMessageId";
    readonly unreadCountP1: "unreadCountP1";
    readonly unreadCountP2: "unreadCountP2";
};
export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly replyToId: "replyToId";
    readonly senderId: "senderId";
    readonly conversationId: "conversationId";
    readonly isRead: "isRead";
    readonly deletedForAll: "deletedForAll";
    readonly deletedFor: "deletedFor";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map