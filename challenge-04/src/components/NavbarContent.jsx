import "../index.css";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import PropType from "prop-types"

export default function NavbarContent({ search, setSearch, handleSearch }) {
  const navigate = useNavigate();
  const Search = (e, search) => {
    e.preventDefault();
    handleSearch(e, search);
    if (handleSearch) {
      navigate("/search", { replace: true });
    }
  };
  return (
    <>
      <Navbar expand="lg" className="nav" id="nav">
          <Navbar.Brand href="/">
            <h1 id="Title">Movielist</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="container">
              <div className="row justify-content-around d-flex">
                <div className="col-md-6 mx-5 my-1" id="form">
                  <form onSubmit={(e) => Search(e, search)}>
                    <input
                      className="form-control btn-outline-danger rounded-pill rounded-pill"
                      type="search"
                      id="input"
                      placeholder="What do you want to watch ?"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </form>
                </div>
                <div className="col-md-2">
                  <div className="row d-flex justify-content-center">
                    <button className="col-12 p-2 m-1 btn btn-outline-danger rounded-pill">
                      Login
                    </button>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="row d-flex justify-content-center">
                    <button className="col-12 p-2 m-1 btn btn-danger rounded-pill">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
}
NavbarContent.propTypes = {
  search: PropType.string.isRequired,
  setSearch: PropType.string.isRequired,
  handleSearch: PropType.func.isRequired,
};
