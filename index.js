import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const port = process.env.PORT || 8080;

const server =  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on('message', (message) => {
        console.log("getting message from client %s: ", message);
        ws.send("Thanks!");
    })
})