import NavBar from "../global_components/NavBar";
import Footer from "../global_components/Footer";
import MovieCarousel from "../global_components/MovieCarousel";
function Home() {
  return (
    <html className="min-h-screen ">
      <section>
      <NavBar />
      <MovieCarousel />
      <div className="bg-blue-950  text-center text-white">
        <article>
        <h1>Welcome to Laser Focus!</h1>
            <p>The premier destination for LaserDisc collectors and enthusiasts. Our passion for the classic, the rare, and the nostalgic is at the heart of everything we do. We believe that every LaserDisc tells a story, and we are here to help you find those rare gems that complete your collection.</p>


          <h2>Why We Exist</h2>
            <p>In a world where digital streaming dominates, we are dedicated to preserving the unique charm and tangible experience of LaserDiscs. Our mission is to provide collectors with a curated selection of rare and hard-to-find titles, ensuring that the legacy of this iconic format lives on.</p>

          <h2>Our Commitment</h2>
            <p>We understand the thrill of the hunt and the joy of discovery. That's why we meticulously source our inventory, guaranteeing that every item meets the highest standards of quality and authenticity. Whether you're a seasoned collector or new to the world of LaserDiscs, we offer a diverse range of titles that cater to all tastes and interests.</p>

          <h2>Join Our Community</h2>
            <p>At <span>Laser Focus</span>, we are more than just an online store; we are a community of like-minded individuals who share a deep appreciation for the artistry and nostalgia of LaserDiscs. Connect with us on social media, join our mailing list for exclusive updates, and become part of a vibrant community that celebrates the beauty of collecting rare items.</p>

Thank you for visiting <span>Laser Focus</span>. We are excited to help you discover your next treasured find.
</article>
      </div>
      <Footer />
    </section>
    </html>
    
  );
}

export default Home;
