import { Carousel } from "react-bootstrap";
import PropType from "prop-types";

const SlideMovie = ({ slideMovies }) => {
  return (
    <Carousel data-bs-theme="dark">
      {slideMovies.slice(2,5).map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            src={`${import.meta.env.VITE_API_IMG}${movie.backdrop_path}`}
            alt="image"
            id="img"
          />
          <Carousel.Caption>
            <div id="information">
              <div className="row">
                <h1 className="col-md-8" id="titleMovie">
                  {movie.title}
                </h1>
              </div>
              <div className="row">
                <p className="col-md-8" id="overviewMovie">
                  {movie.overview}
                </p>
              </div>
              <div className="row">
                <button className="btn btn-danger col-4 m-3">
                  Watch Trailler
                </button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
SlideMovie.propTypes = {
  slideMovies: PropType.func.isRequired,
};
export default SlideMovie;
