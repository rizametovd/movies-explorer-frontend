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
    <li className='card'>
      <div className='card__root-container'>
        <a
          className='card__img-link link'
          href={trailerLink || movieCard.trailer}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='card__img'
            src={`${image.url || image}`}
            alt={`Трейлер фильма ${nameRU}`}
          />
        </a>

        <div className='card__container'>
          <div className='card__info-container'>
            <h3 className='card__title'>{nameRU}</h3>
            <p className='card__duration'>{movieDuration}</p>
          </div>

          <button
            className={`card__save-btn ${movieIsSaved && 'card__save-btn_saved'}  link ${
              location.pathname === '/saved-movies' && 'card__save-btn_remove'
            }`}
            type='button'
            onClick={onSaveMovieClick}
          ></button>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
