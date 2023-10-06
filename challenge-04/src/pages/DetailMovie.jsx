import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "../index.css";

function DetailMovies() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const details = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/3/movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
          },
        }
      );
      const { data } = response;
      setDetail(data);
      setGenre(data.genres);
    };
    details();
  });
  return (
    <>
      <div data-bs-ride="carousel">
        <div className="carousel-inner">
          <img
            src={`${import.meta.env.VITE_API_IMG}${detail.backdrop_path}`}
            alt="image"
            id="img"
          />
          <Carousel.Caption>
            <div id="informationDetail">
              <h1 id="titleMovie" className="col-md-12">
                {detail.title}
              </h1>
              <div className="row px-3">
                Genre Movie :
                <div className="col-md-7">
                  <div className="row">
                    {genre.map((genre) => (
                      <div className="col-3" id="genre" key={genre.id}>
                        <p>{genre.name},</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p id="overviewMovie" className="col-md-8">
                {detail.overview}
              </p>
              <button className="my-3 btn btn-danger col-3" id="watchButton">Watch Trailler</button>
            </div>
          </Carousel.Caption>
        </div>
      </div>
    </>
  );
}

export default DetailMovies;
