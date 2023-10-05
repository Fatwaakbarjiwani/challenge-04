import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavbarContent";
import DetailMovie from "./pages/DetailMovie";
import axios from "axios";
import Search from "./pages/Search";
import AllPopularMovie from "./pages/AllPopularMovie";

function App() {
  const [search, setSearch] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [slideMovies, setSlideMovies] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const getPopularMovies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/3/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
          },
        }
      );
      const { data } = response;

      setPopularMovies(data?.results);
      setErrors({ ...errors, isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors({
          ...errors,
          isError: true,
          message: error?.response?.data?.status_message || error?.message,
        });
        return;
      }

      alert(error?.message);
      setErrors({
        ...errors,
        isError: true,
        message: error?.message,
      });
    }
  };
  const getSlideMovies = async () => {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/3/search/movie?include_adult=false&language=en-US&page=1&query=Doctor Strange`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
      }
    );
    const { data } = response;
    setSlideMovies(data?.results);
  };
  const handleSearch = async (e, value) => {
    e.preventDefault();
    setSearch(value);
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/3/search/movie?query=${value}&include_adult=false&language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
      }
    );
    const { data } = response;
    setSearchMovies(data?.results);
  };

  useEffect(() => {
    getPopularMovies();
    getSlideMovies();
  });

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (popularMovies.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <BrowserRouter>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              popularMovies={popularMovies}
              slideMovies={slideMovies}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path="/search"
          element={<Search search={search} searchMovies={searchMovies} />}
        />
        <Route
          path="/DetailMovie/:id"
          element={
            <DetailMovie
              popularMovies={popularMovies}
              setPopularMovies={setPopularMovies}
            />
          }
        />
        <Route path="/popularMovie" element={<AllPopularMovie popularMovies={popularMovies}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
