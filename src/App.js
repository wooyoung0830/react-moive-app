import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './Movie';

function App() {

  const[movies, setMovies] = useState();
  let [loding, setLoding] = useState(true);

  //sort by rating
  axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
  .then((result) => {
    setLoding(false)
    setMovies([...result.data.data.movies])
  })
  .catch(() => { 
    setLoding(false)
    console.log("실패")})
  
  return (
    <section className="container">
    {
      loding === true
      ? (<div className="loader">
          <p> Loading...</p>
      </div>)
      : (
      <div className="movies">
      {
        movies && movies.map((array, i) => {
          return <Movie id={array.id}
          title={array.title}
          year={array.year}
          summary={array.summary}
          rating={array.rating}
          poster={array.medium_cover_image} 
          genres={array.genres}
          key={i} /> 
        })
      }
      </div>
      )
    }
    
    </section>
  );
}

export default App;
