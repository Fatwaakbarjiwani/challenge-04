import PopularMovie from "../components/PopularMovie";
import SlideMovie from "../components/SlideMovie";
import Footer from "../components/footer";
import PropType from "prop-types"

const Home = ({ slideMovies,popularMovies}) => {
  return (
    <>
      <SlideMovie slideMovies={slideMovies} />
      <PopularMovie popularMovies={popularMovies}/>
      <Footer/>
    </>
  );
};
Home.propTypes = {
  slideMovies: PropType.array.isRequired,
  popularMovies: PropType.array.isRequired,
};
export default Home;
