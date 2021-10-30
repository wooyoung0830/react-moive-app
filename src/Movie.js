import React from "react";

function Movie(props){
    return(
        <div className="movie"> 
            <img src={props.poster} alt={props.title} title={props.title}/> 
            <h3 className="movie_title">{props.title}</h3>
            <h5 className="movie_year">{props.year}</h5>
            <p className="movie_summary">{props.summary}</p>
            <h5>{props.rating}</h5>
            <hr/>
        </div>
    );
}

export default Movie;