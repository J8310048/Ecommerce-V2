import MovieCarousel from "../global_components/MovieCarousel";

function Home() {
  return (
    <html className="min-h-screen">
      <section>
      <MovieCarousel />
      <div className="bg-blue-950  text-center text-white">
        <article className="phonemax:px-16 grid grid-flow-row grid-cols-1 gap-5 mx-16 phonemax:grid-rows-8 justify-center items-center tabletmax:grid-cols-2 tabletmax:grid-rows-4 ">
          <div> 
            <h1 className="phonemin:py-10 text-4xl tabletmin:text-6xl font-Sports">Welcome to Laser Focus!</h1>
            <p className="phonemin:text-m px-12 tabletmin:text-2xl">The premier destination for LaserDisc collectors and enthusiasts. Our passion for the classic, the rare, and the nostalgic is at the heart of everything we do. We believe that every LaserDisc tells a story, and we are here to help you find those rare gems that complete your collection.</p>
            </div>

            <img src="/LaserDisc-Homepage-Photos/laserdisc-at-home.png" alt="LaserDisc Photo" className="rounded-3xl"/>

            <img src="/LaserDisc-Homepage-Photos/laserdisc-player1.png" alt="LaserDisc Photo" className="rounded-3xl"/>

          <div>
            <h2 className="phonemin:py-10 text-4xl tabletmin:text-6xl font-Sports">Why We Exist</h2>
            <p className="phonemin:text-m px-12 tabletmin:text-2xl">In a world where digital streaming dominates, we are dedicated to preserving the unique charm and tangible experience of LaserDiscs. Our mission is to provide collectors with a curated selection of rare and hard-to-find titles, ensuring that the legacy of this iconic format lives on.</p>
            </div>
            

          <div>
            <h2 className="phonemin:py-10 text-4xl tabletmin:text-6xl font-Sports">Our Commitment</h2>
            <p className="phonemin:text-m px-12 tabletmin:text-2xl">We understand the thrill of the hunt and the joy of discovery. That's why we meticulously source our inventory, guaranteeing that every item meets the highest standards of quality and authenticity. Whether you're a seasoned collector or new to the world of LaserDiscs, we offer a diverse range of titles that cater to all tastes and interests.</p>
            </div>

            <img src="/LaserDisc-Homepage-Photos/LaserDisc.png" alt="LaserDisc Photo" className="rounded-3xl"/>

            <img src="/LaserDisc-Homepage-Photos/Pioneer_CLD-1030_Laserdisc_Player_(Open_tray_with_disc).png" alt="LaserDisc Photo" className="rounded-3xl"/>

          <div>
            <h2 className="phonemin:py-10 text-4xl tabletmin:text-6xl font-Sports">Join Our Community</h2>
            <p className="phonemin:text-m px-12 tabletmin:text-2xl">At <span>Laser Focus</span>, we are more than just an online store; we are a community of like-minded individuals who share a deep appreciation for the artistry and nostalgia of LaserDiscs. Connect with us on social media, join our mailing list for exclusive updates, and become part of a vibrant community that celebrates the beauty of collecting rare items.</p>
            </div>
          
            
</article>
      </div>
    </section>
    </html>
    
  );
}

export default Home;
