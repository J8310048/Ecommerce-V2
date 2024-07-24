import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page_components/Home";
import Contact from "../page_components/Contact";
import Movies from "../page_components/Movies";
import Page404 from "../page_components/Page404";
import NavBar from "../global_components/NavBar"; // Ensure this path is correct
import Footer from "../global_components/Footer"; // Ensure this path is correct
import "./index.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
