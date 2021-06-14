import './MoviesCard.css';
import movieImg from '../../images/movie-1.jpg';
import movieImg2 from '../../images/movie-2.jpg';
import movieImg3 from '../../images/movie-3.jpg';
import movieImg4 from '../../images/movie-4.jpg';
import movieImg5 from '../../images/movie-5.jpg';
import movieImg6 from '../../images/movie-6.jpg';
import movieImg7 from '../../images/movie-7.jpg';

import { useLocation } from 'react-router-dom';

function MoviesCard() {
  let location = useLocation();

  return (
    <>
      <li className='card'>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg} alt='Превью фильма' />
          </a>

          <div className='card__container'>
            <div className='card__info-container'>
              <h3 className='card__title'>33 слова о дизайне</h3>
              <p className='card__duration'>1ч 42м</p>
            </div>

            <button
              className={`card__save-btn card__save-btn_saved link ${
                location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
            ></button>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg2} alt='Превью фильма' />
          </a>

          <div className='card__container'>
            <div className='card__info-container'>
              <h3 className='card__title'>Киноальманах «100 лет дизайна»</h3>
              <p className='card__duration'>1ч 42м</p>
            </div>

            <button
              className={`card__save-btn link ${
                location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
            ></button>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg3} alt='Превью фильма' />
          </a>

          <div className='card__container'>
            <div className='card__info-container'>
              <h3 className='card__title'>В погоне за Бенкси</h3>
              <p className='card__duration'>1ч 42м</p>
            </div>

            <button
              className={`card__save-btn card__save-btn_saved link ${
                location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
            ></button>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg4} alt='Превью фильма' />
          </a>

          <div className='card__container'>
            <div className='card__info-container'>
              <h3 className='card__title'>Баския: Взрыв реальности</h3>
              <p className='card__duration'>1ч 42м</p>
            </div>

            <button
              className={`card__save-btn card__save-btn_saved link ${
                location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
            ></button>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg5} alt='Превью фильма' />
          </a>

          <div className='card__container'>
            <div className='card__info-container'>
              <h3 className='card__title'>Бег это свобода</h3>
              <p className='card__duration'>1ч 42м</p>
            </div>

            <button
              className={`card__save-btn link ${
                location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
            ></button>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg6} alt='Превью фильма' />
          </a>

          <div className='card__container'>
            <div className='card__info-container'>
              <h3 className='card__title'>Книготорговцы</h3>
              <p className='card__duration'>1ч 42м</p>
            </div>

            <button
              className={`card__save-btn card__save-btn_saved link ${
                location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
            ></button>
          </div>
        </div>
      </li>

      <li className='card'>
        <div className='card__root-container'>
          <a
            className='card__img-link link'
            href='https://youtu.be/ywjQ3bZElpI'
            target='_blank'
            rel='noreferrer'
          >
            <img className='card__img' src={movieImg7} alt='Превью фильма' />
          </a>

          <div className='card__container'>
            <div className='card__info-container'>
              <h3 className='card__title'>Когда я думаю о Германии ночью</h3>
              <p className='card__duration'>1ч 42м</p>
            </div>

            <button
              className={`card__save-btn link ${
                location.pathname === '/saved-movies' && 'card__save-btn_remove'
              }`}
              type='button'
            ></button>
          </div>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
