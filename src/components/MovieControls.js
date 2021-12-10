import { FaEye, FaTimes, FaEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeMovieFromWatched,
    backToWatchlist,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <p className="ctrl-para">{movie.overview}</p>

          <div className="ctrl-btn-container">
            <button
              className="ctrl-btn"
              onClick={() => addMovieToWatched(movie)}
            >
              <FaEye />
            </button>

            <button
              className="ctrl-btn"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              <FaTimes />
            </button>
          </div>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => backToWatchlist(movie)}>
            <FaEyeSlash />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
}
