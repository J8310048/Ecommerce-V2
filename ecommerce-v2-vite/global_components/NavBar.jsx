import { Link } from "react-router-dom";
import Logo from "../global_components/Logo";

function NavBar() {
  return (
    <div className=" tabletmin:flex inline-flex justify-between items-center">
      <Logo />
      <div></div>
      <nav>
        <ul className="tabletmin:flex inline-flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
