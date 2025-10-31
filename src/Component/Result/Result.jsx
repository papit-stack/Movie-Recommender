import React, { useEffect, useState } from 'react'
import './Result.css'
const Result = ({ answers }) => {
const [movies,setMoives]=useState([]);
const [loading,setLoading]=useState(true);
// const genreIdd="12";
const genreMap={
  Action: 28,
  Comedy: 35,
  Romance: 10749,
  Thriller: 53,
  Horror: 27,
  SiFi:878  
}
const selectedGenre = Array.isArray(answers?.[2]) ? answers[2].map((g) => genreMap[g]) : [];
const genreId = selectedGenre.join(',');


useEffect(()=>{
const fetchMovies=async ()=>{
    try{
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_APP_ID}&with_genres=${genreId}`;
      const response=await fetch(url);
      const data=await response.json();
      setMoives(data.results);
      console.log(data.results);
    }
    catch(error){
      console.log(error);
    }finally{
    setLoading(false);
    }
  }
fetchMovies();
},[genreId]);


  return (
    <>
       <div className="result-container">
  {loading ? (
    <h3 className="loading-text">Loading recommendations...</h3>
  ) : (
    <>
      <h2>🎬 Recommended Movies for You</h2>
      <div className="movie-grid">
        {movies.slice(0, 4).map((movie) => (
          <div key={movie.id} className="movie-card">
            <span className="movie-rating">⭐ {movie.vote_average}</span>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.overview.slice(0, 100)}...</p>
              <p className="movie-date">📅 {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )}
</div>

    </>
  )
}

export default Result
