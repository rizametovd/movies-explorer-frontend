import {
  GITHUB_PROJECT_RESPONSIVE_PAGE,
  GITHUB_PROJECT_SPA_PAGE,
  GITHUB_PROJECT_STATIC_PAGE,
} from '../../utils/constants';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__section-title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-item-link link'
            href={GITHUB_PROJECT_STATIC_PAGE}
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
        </li>

        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-item-link link'
            href={GITHUB_PROJECT_RESPONSIVE_PAGE}
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
        </li>

        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-item-link link'
            href={GITHUB_PROJECT_SPA_PAGE}
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
