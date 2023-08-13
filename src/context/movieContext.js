import { createContext, useReducer } from "react";
import { movies } from "../db/db";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialData = {
    data: movies,
    watchList: [],
    search: "",
    genre: "",
    year: "",
    rating: "",
  };

  const movieHandler = (state, action) => {
    switch (action.type) {
      case "search":
        return { ...state, search: action.payload };
      case "genreFilter":
        return { ...state, genre: action.payload };
      case "rating":
        return { ...state, rating: action.payload };
      case "year":
        return { ...state, year: action.payload };
      case "add_movie":
        return { ...state, data: [...state.data, action.payload] };
      case "star":
        return {
          ...state,
          watchList: [...state.watchList, action.data],
          data: state.data.map((item) =>
            item.id === action.payload ? { ...item, starred: true } : item
          ),
        };
      case "watchlist":
        return {
          ...state,
          watchList: [...state.watchList, action.data],
          data: state.data.map((item) =>
            item.id === action.payload ? { ...item, watchList: true } : item
          ),
        };
      case "remove_watchlist":
        return {
          ...state,
          watchList: state.watchList.filter(
            (item) => item.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(movieHandler, initialData);
  console.log(state);

  const movieData = () => {
    let data = [...state.data];
    if (state.search) {
      data = data.filter(
        (item) =>
          item.title.toLowerCase().includes(state.search.toLowerCase()) ||
          item.director.toLowerCase().includes(state.search.toLowerCase())
        //    ||
        //   item.cast.filter((item) =>
        //     item.toLowerCase().includes(state.search.toLowerCase())
        //   )
      );
    }
    if (state.genre) {
      if (state.genre === "all") {
        data = data.map((item) => item);
      } else data = data.filter((item) => item.genre.includes(state.genre));
    }
    if (state.year) {
      data = data.filter((item) => item.year == state.year);
    }
    if (state.rating) {
      data = data.filter((item) => item.rating == state.rating);
    }
    return data;
  };
  return (
    <MovieContext.Provider value={{ state, dispatch, movieData }}>
      {children}
    </MovieContext.Provider>
  );
};
