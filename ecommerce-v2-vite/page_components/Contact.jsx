import NavBar from "../global_components/NavBar";
import Footer from "../global_components/Footer";
import Form from "../global_components/Form";
function Contact() {
  return (
    <section>
      <NavBar />
      <div>
        {/* <form className="phonemin:flex flex-col m-10 tabletmin:m-20 laptop:m-40 desktop:m-96">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" className="border-solid border-2 border-black"></input>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" className="border-solid border-2 border-black"></input>
          <textarea id="textarea" rows="20" cols="100" className="border-solid border-2 border-black"></textarea><br></br>
          <input type="submit" value="Submit" className="border-solid border-2 border-black"></input>
        </form> */}
        <Form />
      </div>
      <Footer/>
    </section>
  );
}

export default Contact;
