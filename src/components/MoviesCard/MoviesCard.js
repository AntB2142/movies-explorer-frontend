import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import movieImg from '../../images/MovieImg.svg';

function MoviesCard() {
    let location = useLocation();
  
    return (
        <>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
    <div className='movies-card'>
       <div className='movies-card__container'>
           <div className='movies-card__description'>
                <h2 className='movies-card__name'>33 слова о дизайне</h2>
                <p className='movies-card__time'>1ч 42м</p>
           </div>
           <button
              className={`movies-card__save movies-card__save_saved ${
                location.pathname === '/saved-movies' && 'movies-card__save_remove'
              }`}
              type='button'
            ></button>
       </div>
       <a
            className='movies-card__trailer_link'
            href='https://youtu.be/Cz5q05Hl5gs'
            target='_blank'
            rel='noreferrer'
          >
            <img className='movies-card__trailer' src={movieImg} alt='Трейлер фильма' />
          </a>
    </div>
</>
  );
}

export default MoviesCard;