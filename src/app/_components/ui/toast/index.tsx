import { MAX_TOAST_VISIBLE } from "@/lib/constants/app";
import { Toaster } from "sonner";


const ToasterApp = ()=>{
    return (
      <Toaster
        visibleToasts={MAX_TOAST_VISIBLE}
        position="top-center"
        duration={3000}
        toastOptions={{
          classNames: {
            toast: 'toast',
            title: 'title',
            description: 'description',
            actionButton: 'action-button',
            cancelButton: 'cancel-button',
            closeButton: 'close-button',
            success: 'toast-success',
            error: 'toast-error',
          },
        }}
      />
    );
}
export default ToasterApp