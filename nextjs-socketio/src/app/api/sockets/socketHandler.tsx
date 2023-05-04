import { Server } from "socket.io";
import messageHandler from "../../utils/sockets/messageHandler";

export default function SocketHandler(req: any, res: any) {
    if (res.socket.server.io) {
        console.log("Already set up");
        res.end();
        return;
    }

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    const onConnection = (socket: any) => {
        messageHandler(io, socket);

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    };

    io.on("connection", onConnection);

    console.log("Setting up socket");
    res.end();
}