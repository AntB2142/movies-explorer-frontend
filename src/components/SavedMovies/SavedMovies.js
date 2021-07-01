import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  movieDataList,
  handleSaveMovie,
  savedMoviesList,
  handleSearchClick,
  loader,
  noResultsToShow,
  noResultsMessage,
  savedMoviesSearchResults,
  toggleShortMovieFilter,
  shortMovieFilter,
}) {

  return (
    <div className='movies'>
      <SearchForm 
      handleSearchClick={handleSearchClick}
      toggleShortMovieFilter={toggleShortMovieFilter}
      />
      <MoviesCardList 
      movieDataList={movieDataList}
      handleSaveMovie={handleSaveMovie}
      savedMoviesList={savedMoviesList}
      loader={loader}
      noResultsToShow={noResultsToShow}
      noResultsMessage={noResultsMessage}
      savedMoviesSearchResults={savedMoviesSearchResults}
      shortMovieFilter={shortMovieFilter}
      />
    </div>
  );
}

export default SavedMovies;