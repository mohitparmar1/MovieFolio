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
    console.log(popularMovies);
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
            <Link to={`/movie/${movie.id}`} key={movie.id} style={{textDecoration:"none"}}>
              <div className="posterImage">
                <img
                  className="carousel-img"
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
