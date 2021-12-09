import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Header from "./Header";
import MovieCard from "./MovieCard";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      <Header />
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">My watched list</h1>
            <span className="count-pill">
              {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>

          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type="watchlist" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list.</h2>
          )}
        </div>
      </div>
    </div>
  );
}
