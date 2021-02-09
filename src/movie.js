import React from 'react';
import PropTypes from 'prop-types';
import "./movie.css";

function Movie({year, title, summary,poster, genre}){
    return (
        <div className = "movies">
            <img src = {poster} alt = {title} title = {title}/>
            <div className = "movie__data">
                <h3 className = "movie__title">{title}</h3>   
                <h5 className = "movie__year">{year}</h5> 
                <p className = "movie__summary">{summary}</p>
                <ul className = "genres">
                    {genre.map((genre, index) => 
                        <li key = {index} className = "genres__genre">
                            {genre}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {

    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie;