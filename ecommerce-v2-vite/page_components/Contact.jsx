import NavBar from "../global_components/NavBar";
import Footer from "../global_components/Footer";
import ContactForm from "../global_components/ContactForm";
function Contact() {
  return (
    <section>
      <NavBar />
      <div className="phonemin: mt-28">
        <h1 className="text-center text-3xl">Let us know!</h1>
        <ContactForm />
      </div>
      <Footer/>
    </section>
  );
}

export default Contact;
