import NavBar from "../global_components/NavBar";
import Footer from "../global_components/Footer";
import MovieCarousel from "../global_components/MovieCarousel";
function Home() {
  return (
    <section>
      <NavBar />
      <MovieCarousel />
      <div>
        <h1>Welcome to Laser Focus!</h1>
        <p></p>
      </div>
      <Footer/>
    </section>
  );
}

export default Home;
