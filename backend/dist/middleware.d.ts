import express from "express";
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}
declare const authMiddleware: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<express.Response<any, Record<string, any>> | undefined>;
export default authMiddleware;
//# sourceMappingURL=middleware.d.ts.map