import emailjs from "emailjs-com";
import { SetStateAction } from "react";

async function EmailHandlerUtils({
  email,
  message,
  name,
  setIsEmailSent,
  setIsProcessing,
}: {
  email: string;
  message: string;
  name: string;
  setIsEmailSent: React.Dispatch<SetStateAction<boolean>>;
  setIsProcessing: React.Dispatch<SetStateAction<boolean>>;
}) {
  setIsProcessing(true);
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { from_name: name, from_email: email, message: message },
      import.meta.env.VITE_EMAILJS_USER_ID
    );
    setIsEmailSent(true);
    setIsProcessing(false);
  } catch (error) {
    console.error(error);
    setIsProcessing(false);
  }
}
export default EmailHandlerUtils;
