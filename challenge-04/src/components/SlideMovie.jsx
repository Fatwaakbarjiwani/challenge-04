import { Carousel } from "react-bootstrap";
import PropType from "prop-types"

const SlideMovie = ({ slideMovies }) => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          src={`${import.meta.env.VITE_API_IMG}${slideMovies[4].backdrop_path}`}
          alt="image"
          id="img"
        />

        <Carousel.Caption>
          <div id="information">
            <div className="row">
              <h1 className="col-md-8" id="titleMovie">
                {slideMovies[4].title}
              </h1>
            </div>
            <div className="row">
              <p className="col-md-8" id="overviewMovie">
                {slideMovies[4].overview}
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
      <Carousel.Item>
        <img
          src={`${import.meta.env.VITE_API_IMG}${slideMovies[1].backdrop_path}`}
          alt="image"
        />
        <Carousel.Caption>
          <div id="information">
            <div className="row">
              <h1 className="col-md-8" id="titleMovie">
                {slideMovies[1].title}
              </h1>
            </div>
            <div className="row">
              <p className="col-md-8" id="overviewMovie">
                {slideMovies[1].overview}
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
      <Carousel.Item>
        <img
          src={`${import.meta.env.VITE_API_IMG}${slideMovies[3].backdrop_path}`}
          alt="image"
        />
        <Carousel.Caption>
          <div id="information">
            <div className="row">
              <h1 className="col-md-8" id="titleMovie">
                {slideMovies[2].title}
              </h1>
            </div>
            <div className="row">
              <p className="col-md-8" id="overviewMovie">
                {slideMovies[2].overview}
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
    </Carousel>
  );
};
SlideMovie.propTypes = {
  slideMovies: PropType.func.isRequired,
};
export default SlideMovie;
