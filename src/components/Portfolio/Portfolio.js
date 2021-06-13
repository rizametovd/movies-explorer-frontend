import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__section-title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-item-link link'
            href='https://github.com/rizametovd/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
        </li>

        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-item-link link'
            href='https://github.com/rizametovd/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
        </li>

        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-item-link link'
            href='https://github.com/rizametovd/react-mesto-auth'
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
