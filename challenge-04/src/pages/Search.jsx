import PropType from "prop-types";
import { Link } from "react-router-dom";
const Search = ({ search, searchMovies }) => {
  return (
    <div id="search">
      <div className="my-5 mx-3">
        <h2>Search Result "{search}"</h2>
        <div className="row p-2" id="listMovie">
          {searchMovies.map((movie) => (
            <div className="col-3 my-2" key={movie.id}>
              <Link to = {`/DetailMovie/${movie.id}`}>
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
    </div>
  );
};
Search.propTypes = {
  search: PropType.string.isRequired,
  searchMovies: PropType.array.isRequired,
};
export default Search;
