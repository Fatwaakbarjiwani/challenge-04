import PropType from "prop-types"
import { Link } from "react-router-dom";
export default function AllPopularMovie({ popularMovies }) {
  return (
    <>
      <div id="popularMovies">
        <div className="row p-2" id="listMovie">
          <h1>Popular Movie</h1>
          {popularMovies.map((movie) => (
            <div className="col-3 my-2" key={movie.id}>
              <Link to={`/DetailMovie/${movie.id}`}>
                <img
                  id="card"
                  className="w-100 h-100 rounded"
                  src={`${import.meta.env.VITE_API_IMG_CARD}${
                    movie?.poster_path
                  }`}
                  alt="image.png"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
AllPopularMovie.propTypes = {
  popularMovies: PropType.array.isRequired,
};
