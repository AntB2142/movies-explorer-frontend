import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {

  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList />
      <button className='movies__more-films'>Ещё</button>
    </div>
  );
}

export default Movies;