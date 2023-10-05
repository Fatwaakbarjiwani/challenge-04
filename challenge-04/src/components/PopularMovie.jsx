import PropType from "prop-types";
import { Link } from "react-router-dom";
export default function PopularMovie({ popularMovies }) {
  return (
    <>
      <div className="row" id="head">
        <div className="col-12 d-flex justify-content-between">
          <h2>Popular Movie</h2>
          <Link
            to="/popularMovie"
            className="my-3 link-danger link-offset"
          >
            See All Movie
          </Link>
        </div>
      </div>
      <div className="row p-3" id="listMovie">
        <div className="col-3">
          <Link to={`/DetailMovie/${popularMovies[0].id}`}>
            <img
              className="w-100 h-100 rounded"
              src={`${import.meta.env.VITE_API_IMG_CARD}${
                popularMovies[0]?.poster_path
              }`}
              alt="image.png"
            />
          </Link>
        </div>
        <div className="col-3">
          <Link to={`/DetailMovie/${popularMovies[1].id}`}>
            <img
              className="w-100 h-100 rounded"
              src={`${import.meta.env.VITE_API_IMG_CARD}${
                popularMovies[1]?.poster_path
              }`}
              alt="image.png"
            />
          </Link>
        </div>
        <div className="col-3">
          <Link to={`/DetailMovie/${popularMovies[2].id}`}>
            <img
              className="w-100 h-100 rounded"
              src={`${import.meta.env.VITE_API_IMG_CARD}${
                popularMovies[2]?.poster_path
              }`}
              alt="image.png"
            />
          </Link>
        </div>
        <div className="col-3">
          <Link to={`/DetailMovie/${popularMovies[3].id}`}>
            <img
              className="w-100 h-100 rounded"
              src={`${import.meta.env.VITE_API_IMG_CARD}${
                popularMovies[3]?.poster_path
              }`}
              alt="image.png"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

PopularMovie.propTypes = {
  popularMovies: PropType.func.isRequired,
};
