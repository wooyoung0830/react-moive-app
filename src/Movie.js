import React, { useState } from "react";



function Movie(props){
    const [summary, setSummary] = useState(true)
    
    return(
        <div className="movie"> 
            <img src={props.poster} alt={props.title} title={props.title}/> 
            <div className="movie_data">
                <h3 className="movie_title">{props.title}</h3>
                <h5 className="movie_year">{props.year}</h5>
                <ul className="movie_gener">
                {
                    props.genres.map((gener ,i) => {
                        return <li key ={i} >{gener}</li>
                    })
                }
                </ul>
                <h5>★  {props.rating}</h5>
                {
                    summary === true 
                    ? (<p className="movie_summary">{props.summary.slice(0,140)}...<span onClick={() => {setSummary(false)}}>🔽</span></p>)
                    : (<p className="movie_summary">{props.summary}<span onClick={() => {setSummary(true)}}>🔼</span></p>)
                }
            </div>
        </div>
    );
}

export default Movie;