import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";

export const NavBar = () => {
  const { dispatch } = useContext(MovieContext);
  return (
    <div className="navbar">
      <h2>IMDB</h2>
      <div>
        <input
          type="text"
          placeholder="Search By title,cast or director"
          className="search"
          onChange={(e) => {
            dispatch({ type: "search", payload: e.target.value });
          }}
        />
      </div>
      <h3>
        <Link to="/">Movies</Link>
      </h3>
      <h3>
        <Link to="/watchlist">Watch List</Link>
      </h3>
    </div>
  );
};
