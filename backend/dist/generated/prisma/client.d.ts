import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model CaseRecord
 *
 */
export type CaseRecord = Prisma.CaseRecordModel;
/**
 * Model Property
 *
 */
export type Property = Prisma.PropertyModel;
/**
 * Model CustodyLog
 *
 */
export type CustodyLog = Prisma.CustodyLogModel;
/**
 * Model Disposal
 *
 */
export type Disposal = Prisma.DisposalModel;
/**
 * Model ScanLog
 *
 */
export type ScanLog = Prisma.ScanLogModel;
/**
 * Model Conversation
 *
 */
export type Conversation = Prisma.ConversationModel;
/**
 * Model Message
 *
 */
export type Message = Prisma.MessageModel;
//# sourceMappingURL=client.d.ts.map