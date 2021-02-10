import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => { 
    return movieData.map((movie) =>    
    //movieData is an Array of Objects and we are converting them from an Array of Movies to an Array of MovieCard Components 
    <MovieCard 
    title = {movie.title}
    IMDBRating = {movie.IMDBRating}
    genres = {movie.genres}
    poster = {movie.poster}  //We are assigning the nickname 
    />)

    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
