import { io } from "socket.io-client";

const backendUrl = "https://find-buddy-backend.vercel.app";

const socket = io(`${backendUrl}`, {
    withCredentials: true,
    autoConnect: true
});

export default socket;