import NavBar from "../global_components/NavBar";
function Contact() {
  return (
    <section>
      <NavBar />
      <div>
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"></input>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"></input>
          <textarea id="textarea" rows="20" cols="100"></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </section>
  );
}

export default Contact;
