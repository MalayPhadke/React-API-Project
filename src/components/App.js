import React from 'react';
import Nav from './Nav';
import Searchbar from './SearchBar';
import MovieList from './MovieList';
import Pagination from './Pagination';

import MovieInfo from './MovieInfo';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      movies: [],
      tv: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    }
    this.apiKey = "Your api key";
  }

  handleSubmitMovie = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${this.state.searchTerm}&include_adult=false`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({ movies: [...res.results], totalResults: res.total_results})
    })
  }

  handleSubmitTv = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({ tv: [...res.results], totalResults: res.total_results})
    })
  }

  handleChange = (e) => { 
   this.setState({ searchTerm: e.target.value })
  }
  
  nextPageMovie = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({ movies: [...res.results], currentPage: pageNumber })
    })
  }

  nextPageTv = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(res => res.json())
    .then(res => {
      this.setState({ tv: [...res.results], currentPage: pageNumber })
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
   
    this.setState({ currentMovie: newCurrentMovie });

    console.log(this.state.currentMovie)

  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
          <Nav />
          {this.state.currentMovie ==  null ? <div><Searchbar handleSubmit={this.handleSubmitMovie} handleChange={this.handleChange} /><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} title={this.state.currentMovie.title} overview={this.state.currentMovie.overview} release_date={this.state.currentMovie.release_date} image={this.state.currentMovie.poster_path} genres={this.state.currentMovie.genres} /> }
          { this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPageMovie={this.nextPageMovie} currentPage={this.state.currentPage} /> : '' }
        </div>
      );
    
  }

}
export default App;

