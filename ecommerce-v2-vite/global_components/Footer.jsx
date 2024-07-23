import { NavLink } from "react-router-dom";
import Socials from "./Social-Icons";

function Footer() {
  return (
    <div>
      <footer className="phonemin: flex flex-col justify-center items-center sticky bottom-0">  
        <ul className="phonemin: flex justify-center space-x-4">
          <li>
            <NavLink to="/" className="hover:underline">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="hover:underline">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
          </li>
        </ul>
        <div>
        <Socials/>
      </div>
      </footer>
    </div>
  );
}

export default Footer;
