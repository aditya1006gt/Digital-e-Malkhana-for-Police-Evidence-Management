import { Server as SocketIOServer } from 'socket.io';
import type { Server as HTTPServer } from 'http';
export declare function initializeWebSocket(httpServer: HTTPServer): SocketIOServer<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
export declare function getIO(): SocketIOServer | null;
//# sourceMappingURL=webSocket.d.ts.map