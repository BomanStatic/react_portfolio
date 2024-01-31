import { useEffect } from "react";
import "./Toast.css";
function Toast({ message, type, isOpen, closeToast }) {
    const toastUptime = 3000;
    useEffect(() => {
        const timer = setTimeout(() => {
            closeToast();
        }, toastUptime);
        return () => clearTimeout(timer);
    }, [isOpen, closeToast]);

    if (!isOpen) return null;
    return (
        <ol role="list" className={`toast ${type}`}>
            <li>{message}</li>
        </ol>
    );
}

export default Toast;
