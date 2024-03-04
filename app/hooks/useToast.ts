import { useContext } from "react";

// Contexts
import { ToastContext } from "@/context/toast";

const useToast = () => useContext(ToastContext);

export { useToast };
