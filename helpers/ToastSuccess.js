import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

export default function ToastSuccess(message) {
    injectStyle();
    return toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
        progress: undefined,
        style: { fontSize: "1.4rem", backgroundColor: "#00a123" }
    });
}