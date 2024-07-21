import { NavLink } from "react-router-dom";
import Socials from "./Social-Icons";

function Footer() {
  return (
    <div>
      <footer className="phonemin:flex flex-col justify-center items-center">
        <ul className="phonemin:flex inline-flex justify-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <div className="Socials">
        <Socials />
      </div>
      </footer>
    </div>
  );
}

export default Footer;
