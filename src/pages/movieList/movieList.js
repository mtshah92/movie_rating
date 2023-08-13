import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import "./movieList.css";
import { useNavigate } from "react-router";

export const MovieList = () => {
  const { state, dispatch, movieData } = useContext(MovieContext);
  const filterData = movieData();
  const navigate = useNavigate();
  const genre = [];
  const genres = state.data.map((item) => genre.push(...item.genre));
  const filterGenre = genre.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const year = state.data
    .map((item) => item.year)
    .filter((value, index, array) => array.indexOf(value) === index);

  const rating = state.data
    .map((item) => item.rating)
    .filter((value, index, array) => array.indexOf(value) === index);
  //   console.log(filterData);
  return (
    <div className="movie-page">
      <div className="movie-header">
        <h3>Movies</h3>
        <div className="genre-filter">
          <select
            name="genre-filter"
            onChange={(e) =>
              dispatch({ type: "genreFilter", payload: e.target.value })
            }
          >
            <option value="all" selected>
              All Genre
            </option>
            {filterGenre.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div className="rating">
          <select
            name="rating"
            onChange={(e) =>
              dispatch({ type: "rating", payload: e.target.value })
            }
          >
            <option selected disabled>
              Rating
            </option>
            {rating.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div className="year">
          <select
            name="year"
            onChange={(e) =>
              dispatch({ type: "year", payload: e.target.value })
            }
          >
            <option disabled selected>
              Select Year
            </option>
            {year.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <h4 className="add-movie" onClick={() => navigate("/newMovie")}>
          Add a Movie
        </h4>
      </div>
      <div className="movie-list">
        {filterData.map((item) => {
          const { id, title, imageURL, summary, rating, year, watchList } =
            item;
          return (
            <div className="each-movie" key={id}>
              <img src={imageURL} alt={title} width="200" height="200" />
              <h3
                onClick={() => navigate(`/movies/${id}`)}
                className="movie-title"
              >
                {title}
              </h3>
              <p>{summary}</p>
              <p>Rating: {rating}</p>
              <p>Year: {year}</p>
              <button
                onClick={() =>
                  dispatch({ type: "watchlist", payload: id, data: item })
                }
                disabled={watchList}
              >
                {watchList ? "Added to WatchList" : "Add to Watchlist"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
