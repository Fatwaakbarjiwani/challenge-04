import PropType from "prop-types";
import { Link } from "react-router-dom";
export default function PopularMovie({ popularMovies }) {
  return (
    <>
      <div className="row" id="head">
        <div className="col-12 d-flex justify-content-between">
          <h2>Popular Movie</h2>
          <Link to="/popularMovie" className="my-3 link-danger link-offset">
            See All Movie
          </Link>
        </div>
      </div>
      <div className="row p-3" id="listMovie">
        {popularMovies.slice(0, 4).map((movie) => (
          <div className="col-3" key={movie.id}>
            <Link to={`/DetailMovie/${movie.id}`}>
              <img
                className="w-100 h-100 rounded"
                src={`${import.meta.env.VITE_API_IMG_CARD}${
                  movie.poster_path
                }`}
                alt="image.png"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

PopularMovie.propTypes = {
  popularMovies: PropType.func.isRequired,
};
