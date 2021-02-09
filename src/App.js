import React from 'react';
import axios from 'axios';
import Movie from './movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //not fast all the time. So we need to tell JavaScript that we might need to wait for some time until getMovies function finishes
  getMovies = async () => {
    //this function is asynchronous so we need to wait for it. 
   
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //telling to wait for axios to finish using await

    this.setState({movies, isLoading: false});
    //equal to {movies:movies}
  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    //ES6 
    return (
      <section className = "container">
        {isLoading ? (
          <div className = "loader">
            <span className = "loader__text">
              Loading...
            </span>
          </div>
        ) : (
          <div className = "movies">
            {movies.map(movie => {
            //console.log(movie);
              return <Movie 
                    key= {movie.id} 
                    id ={movie.id} 
                    year={movie.year} 
                    title= {movie.title} 
                    summary= {movie.summary} 
                    poster ={movie.medium_cover_image}
                    genre = {movie.genres}/>
          })}
          </div>
        )} 
      </section>
    );
  }
}

export default App;
