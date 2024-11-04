import ContactForm from "./components/ContactForm";
import ContactSection from "./components/ContactSection";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-24">
      <div className="md:basis-2/3">
        <ContactForm />
      </div>
      <div className="md:basis-1/3">
        <ContactSection />
      </div>
    </div>
  );
}
export default Contact;
