import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="FooterLinks">
        <ul>
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
      </footer>
      <div className="Socials"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/movies" element={MovieList} />
          <Route path="/contact" element={Contact} />
          {/* <Route path="/*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Footer;
