import { useState } from "react";
import { Form } from "react-router-dom";
import EmailHandlerUtils from "../utils/EmailHandlerUtils";

function ContactForm() {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  return (
    <div className="bg-primarylight p-8 md:p-16">
      {isEmailSent ? (
        <div>
          <h1 className="text-4xl text-neutral">
            Thank you for reaching out! I'll get back to you as soon as
            possible.
          </h1>
        </div>
      ) : (
        <Form
          className=""
          onSubmit={async (e) => {
            e.preventDefault();
            const target = e.target as HTMLFormElement;
            const formData = new FormData(target);
            await EmailHandlerUtils({
              name: formData.get("name") as string,
              email: formData.get("email") as string,
              message: formData.get("message") as string,
              setIsEmailSent: setIsEmailSent,
              setIsProcessing: setIsProcessing,
            });
          }}
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-secondary font-bold">
              Let's Work Together
            </h1>
            <p className="text-neutralmedium font-jetbrains">
              Fill out the form below to get in touch.
            </p>
          </div>
          <div className="flex flex-col justify-start gap-4 mt-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="bg-primary font-jetbrains w-[90%] text-neutral"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-primary font-jetbrains w-[90%] text-neutral"
              required
            />
            <textarea
              id="message"
              name="message"
              className="bg-primary font-jetbrains w-[100%] h-20 md:h-40 text-neutral"
              placeholder="message"
              required
            />
            <button
              className="bg-secondary text-primary p-3 rounded-full font-bold hover:scale-[1.1] transition-all"
              disabled={isProcessing}
            >
              Send message
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}
export default ContactForm;
