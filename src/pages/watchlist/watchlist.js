import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";

export const WatchList = () => {
  const { state, dispatch } = useContext(MovieContext);
  return (
    <div>
      <div className="movie-list">
        {state.watchList.map((item) => {
          const { id, title, imageURL, summary, rating, year } = item;
          return (
            <div className="each-movie" key={id}>
              <img src={imageURL} alt={title} width="200" height="200" />
              <h3>{title}</h3>
              <p>{summary}</p>
              <p>Rating: {rating}</p>
              <p>Year: {year}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "remove_watchlist",
                    payload: id,
                    data: item,
                  })
                }
              >
                Remove From Wishlist
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
