import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MoviesCard({ movieCard, handleSaveMovie, savedMoviesList }) {
  const location = useLocation();

  const { nameRU, trailerLink, image, duration } = movieCard;
  const [movieIsSaved, setMovieIsSaved] = useState(false);
  const movieDuration = `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  function onSaveMovieClick() {
    handleSaveMovie(movieCard);
  }

  function checkLike(savedMoviesList, movieCard) {
    return savedMoviesList.some((el) => el.nameRU === movieCard.nameRU);
  }

  useEffect(() => {
    const result = checkLike(savedMoviesList, movieCard);
    setMovieIsSaved(result);
  }, [savedMoviesList, movieCard]);
  
    return (
    <>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>{nameRU}</h2>
                <p className='movies-card__time'>{movieDuration}</p>
           </div>
           <button
            className={`movies-card__save ${movieIsSaved && 'movies-card__save_saved'}  link ${
              location.pathname === '/saved-movies' && 'movies-card__save_remove'
            }`}
            type='button'
            onClick={onSaveMovieClick}
          ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href={trailerLink || movieCard.trailer}
            target='_blank'
            rel='noreferrer'
          >
            <img 
            className='movies-card__trailer' 
            src={`${image.url || image}`}
            alt={`Трейлер фильма ${nameRU}`}
            />
          </a>
    </div>
    </>
  );
}

export default MoviesCard;