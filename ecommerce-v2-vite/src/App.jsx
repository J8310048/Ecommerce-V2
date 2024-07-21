import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page_components/Home";
import Contact from "../page_components/Contact";
import Movies from "../page_components/Movies";
import Page404 from "../page_components/Page404";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
