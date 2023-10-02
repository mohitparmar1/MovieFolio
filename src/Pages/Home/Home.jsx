import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="carousel-wrapper">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={3}
          showStatus={false}
          showThumbs={false}
        >
          {popularMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="carousel-image">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
