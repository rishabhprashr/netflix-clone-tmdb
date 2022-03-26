import React from "react";
import { get } from "./../../axios";
import { useEffect, useState } from "react";
import "./index.css";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = `https://image.tmdb.org/t/p/original`;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await get(fetchUrl);
        setMovies(res.results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // const handleClick = (name) => {
  //   if (trailerUrl) {
  //     setUrl("");
  //   } else {
  //     movieTrailer(name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setUrl(urlParams.get("v"));
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            // onClick={() => handleClick(movie.name)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
