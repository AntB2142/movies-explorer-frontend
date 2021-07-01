import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { TABLET_RESOLUTION, MAX_MOVIES_TO_RENDER, MOVIES_PAGE } from '../../utils/constants';
import { NO_SHORT_MOVIES_RESULTS } from '../../utils/responseMessages';
import { filterShortMovies } from '../../utils/helperFunctions';

function MoviesCardList({
    moviesSearchResults,
    loader,
    noResultsToShow,
    noResultsMessage,
    handleSaveMovie,
    savedMoviesList,
    savedMoviesSearchResults,
    errorMessage,
    shortMovieFilter,
  }) {
    const location = useLocation();
    const [showMoreBtn, setShowMoreBtn] = useState(false);
    const [moviesToRender, setMoviesToRender] = useState(0);
    const [userScreenResolution, setUserScreenResolution] = useState(window.innerWidth);
  
    function screenResize() {
      setTimeout(() => {
        setUserScreenResolution(window.innerWidth);
      }, 1000);
    }
  
    useEffect(() => {
      screenResize();
      window.addEventListener('resize', screenResize);
  
      return () => {
        window.removeEventListener('resize', screenResize);
      };
    }, []);
  
    function showMoreMoviesOnClick() {
      if (moviesSearchResults.length > moviesToRender && userScreenResolution < TABLET_RESOLUTION) {
        setMoviesToRender(moviesToRender + MAX_MOVIES_TO_RENDER.mobile);
      } else {
        setMoviesToRender(moviesToRender + MAX_MOVIES_TO_RENDER.tablet);
      }
    }
  
    useEffect(() => {
      function movieToRenderQuantity(moviesList) {
        moviesList && userScreenResolution < TABLET_RESOLUTION
          ? setMoviesToRender(MAX_MOVIES_TO_RENDER.mobile)
          : setMoviesToRender(MAX_MOVIES_TO_RENDER.tablet);
      }
      movieToRenderQuantity(moviesSearchResults);
    }, [moviesSearchResults, userScreenResolution, location.pathname]);
  
    const renderMoreButton = useCallback(
      (moviesList, moviesData) => {
        if (!shortMovieFilter) {
          moviesList.length <= moviesToRender ? setShowMoreBtn(false) : setShowMoreBtn(true);
        } else {
          moviesData.length <= moviesToRender ? setShowMoreBtn(false) : setShowMoreBtn(true);
        }
      },
      [moviesToRender, shortMovieFilter]
    );
  
    const moviesData = arrangeMoviesForRender(
      moviesSearchResults,
      savedMoviesSearchResults,
      savedMoviesList
    );
  
    useEffect(() => {
      if (location.pathname === MOVIES_PAGE) {
        renderMoreButton(moviesSearchResults, moviesData);
      }
    }, [moviesSearchResults, moviesToRender, location.pathname, renderMoreButton, moviesData]);
  
    function arrangeMoviesForRender(moviesSearchResults, savedMoviesSearchResults, savedMoviesList) {
      if (!shortMovieFilter) {
        return location.pathname === MOVIES_PAGE
          ? moviesSearchResults.slice(0, moviesToRender) || []
          : savedMoviesSearchResults.length > 0
          ? savedMoviesSearchResults
          : savedMoviesList;
      } else {
        return location.pathname === MOVIES_PAGE
          ? filterShortMovies(moviesSearchResults).slice(0, moviesToRender) || []
          : savedMoviesSearchResults.length > 0
          ? filterShortMovies(savedMoviesSearchResults)
          : filterShortMovies(savedMoviesList);
      }
    }
    return (
    <div className='movies-cardlist'>
        <div className='movies-list'>
             {loader && <Preloader />}
             {shortMovieFilter && !loader && moviesData.length === 0 && (
        <div className='movies-card__no-search-results'>
          <p className='movies-card__no-search-results-text'>{NO_SHORT_MOVIES_RESULTS}</p>
        </div>
      )}

      {!loader && shortMovieFilter && noResultsToShow && (
        <div className='movies-card__no-search-results'>
          <p className='movies-card__no-search-results-text'>{NO_SHORT_MOVIES_RESULTS}</p>
        </div>
      )}

      {!loader && noResultsToShow && !shortMovieFilter && (
        <div className='movies-card__no-search-results'>
          <p className='movies-card__no-search-results-text'>{noResultsMessage}</p>
        </div>
      )}

      {!loader && errorMessage && (
        <div className='movies-card__no-search-results'>
          <p className='movies-card__no-search-results-text'>{errorMessage}</p>
        </div>
      )}
           {!loader &&
            !noResultsToShow &&
            moviesData.map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movieCard={movie}
                handleSaveMovie={handleSaveMovie}
                savedMoviesList={savedMoviesList}
              />
            ))} 
        </div>
        {showMoreBtn && !loader && (
            <button 
            className='movies__more-films'
            type='button'
            onClick={showMoreMoviesOnClick}
            >
               Ещё
            </button>
            )}
        </div>
    );
}

export default MoviesCardList;