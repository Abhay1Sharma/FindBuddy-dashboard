import { io } from "socket.io-client";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const socket = io(`${backendUrl}`, {
    withCredentials: true,
    autoConnect: true
});

export default socket;