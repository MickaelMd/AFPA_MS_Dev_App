import { useState } from "react";

function Moviedb() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);

  function FetchDB(event) {
    setName(event.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=${event.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h1>Moviedb</h1>
      <input type="text" onInput={FetchDB} value={name} />

      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "200px", height: "300px" }}
              />
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default Moviedb;
