import { Route, Routes } from "react-router";
import "./App.css";
import { MovieList } from "./pages/movieList/movieList";
import { MovieDetail } from "./pages/movieDetail/movieDetail";
import { WatchList } from "./pages/watchlist/watchlist";
import { NavBar } from "./components/navbar/navbar";
import { AddMovie } from "./pages/addMovie/addMovie";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/newMovie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
