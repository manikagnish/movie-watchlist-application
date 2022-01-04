import MovieControls from "./MovieControls";

export default function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <div className="movie-info">
        <h4 className="date">
          {movie.release_date
            ? movie.release_date.substring(0, 4)
            : movie.release_date}
        </h4>
      </div>
      {/* <p className="">{movie.overview}</p> */}
      <p className="rating">Rating {movie.vote_average}</p>
      <MovieControls type={type} movie={movie} />
    </div>
  );
}
