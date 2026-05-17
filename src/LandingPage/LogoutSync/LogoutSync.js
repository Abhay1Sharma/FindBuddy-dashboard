// src/components/LogoutSync.js
import { useEffect } from "react";

const frontendUrl = process.env.REACT_APP_FRONTEND_URL;
const LogoutSync = () => {
    useEffect(() => {
        localStorage.clear(); // Clears Port 3002
        // Redirect back to the main portal login
        window.location.href = `${frontendUrl}`; 
    }, []);

    return <div>Syncing logout...</div>;
};

export default LogoutSync;