import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  handleSearchClick,
  moviesSearchResults,
  loader,
  noResultsToShow,
  noResultsMessage,
  handleSaveMovie,
  savedMoviesList,
  errorMessage,
  toggleShortMovieFilter,
  shortMovieFilter,
}) 


{
  return (
    <section className='movies'>
      <SearchForm 
      handleSearchClick={handleSearchClick}
      toggleShortMovieFilter={toggleShortMovieFilter}
      />
      <MoviesCardList 
      moviesSearchResults={moviesSearchResults}
      loader={loader}
      noResultsToShow={noResultsToShow}
      noResultsMessage={noResultsMessage}
      handleSaveMovie={handleSaveMovie}
      savedMoviesList={savedMoviesList}
      errorMessage={errorMessage}
      shortMovieFilter={shortMovieFilter}
      />
    </section>
  );
}

export default Movies;