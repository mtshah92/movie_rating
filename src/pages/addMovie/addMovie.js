import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext";
import { useNavigate } from "react-router";

export const AddMovie = () => {
  const { dispatch } = useContext(MovieContext);
  const navigate = useNavigate();
  const [newMovie, setMovie] = useState({
    id: "",
    title: "",
    year: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageURL: "",
  });
  return (
    <div className="add-movie-page">
      <div>
        <p>Title</p>
        <input
          placeholder="title"
          onChange={(e) => setMovie({ ...newMovie, title: e.target.value })}
        />
      </div>
      <div>
        <p>Summary</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, summary: e.target.value })}
        />
      </div>
      <div>
        <p>Year</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, year: e.target.value })}
        />
      </div>
      <div>
        <p>Cast</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, cast: e.target.value })}
        />
      </div>
      <div>
        <p>Genre</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, genre: e.target.value })}
        />
      </div>
      <div>
        <p>Rating</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, rating: e.target.value })}
        />
      </div>
      <div>
        <p>Director</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, director: e.target.value })}
        />
      </div>
      <div>
        <p>Writer</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, writer: e.target.value })}
        />
      </div>
      <div>
        <p>ImageURL:</p>
        <input
          onChange={(e) => setMovie({ ...newMovie, imageURL: e.target.value })}
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "add_movie", payload: newMovie });
            navigate("/");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
