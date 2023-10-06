import PopularMovie from "../components/PopularMovie";
import SlideMovie from "../components/SlideMovie";
import PropType from "prop-types"

const Home = ({ slideMovies,popularMovies}) => {
  return (
    <>
      <SlideMovie slideMovies={slideMovies} />
      <PopularMovie popularMovies={popularMovies}/>
    </>
  );
};
Home.propTypes = {
  slideMovies: PropType.array.isRequired,
  popularMovies: PropType.array.isRequired,
};
export default Home;
