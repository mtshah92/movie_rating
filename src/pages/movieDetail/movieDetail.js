import { useContext } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../../context/movieContext";
import "./movieDetail.css";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const { state, dispatch } = useContext(MovieContext);
  const filterData = state.data.find((item) => item.id == movieId);
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = filterData;

  return (
    <div className="movie-detail-page">
      <div className="image">
        <img src={imageURL} width="400" height="400" />
      </div>
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{summary}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre.join(",")}</p>
        <p>Rating: {rating}</p>
        <p>Direcctor: {director}</p>
        <p>Writer: {writer}</p>
        <p>Cast: {cast.join(",")}</p>
      </div>
    </div>
  );
};
