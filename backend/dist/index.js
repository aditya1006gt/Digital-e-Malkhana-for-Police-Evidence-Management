import express from 'express';
import http from 'http';
import cors from 'cors';
import mainRouter from './routes/index.js';
import { initializeWebSocket } from './webSocket.js';
const app = express();
const server = http.createServer(app);
// Middleware
app.use(cors({
    origin: [process.env.CLIENT_URL || 'http://localhost:3000', "https://hoppscotch.io", 'http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
// Routes
app.use('/api/v1', mainRouter);
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
// Initialize WebSocket
initializeWebSocket(server);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 WebSocket server ready`);
});
export default app;
//# sourceMappingURL=index.js.map