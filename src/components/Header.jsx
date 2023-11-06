import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-left">
      <div className="logo" style={{ textDecoration: "none" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4 className="logo-text">MovieFolio.</h4>
        </Link>
      </div>
      <div>
        <Link to="/movie/popular" style={{ textDecoration: "none" }}>
          <span className="about-text"> Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span className="about-text">Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span className="about-text">Upcoming </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
