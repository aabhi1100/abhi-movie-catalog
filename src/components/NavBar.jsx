import { Link } from "react-router-dom";
import "../css/NavBar.css"
import { useMovieContext } from "../contexts/MovieContext";

function NavBar(){
  const { reloadPopularMovies } = useMovieContext();
    return(
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/"onClick={reloadPopularMovies}>Movie App</Link>
          </div>
          <div className="navbar-links">
            <Link to="/"onClick={reloadPopularMovies} className="nav-links">Home</Link>
            <Link to="/fav" className="nav-links">Favorites</Link>
          </div>
        </nav>
       
    )
}
export default NavBar