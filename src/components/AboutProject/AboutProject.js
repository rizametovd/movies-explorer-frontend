import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__section-title'>О проекте</h2>

      <ul className='about-project__list'>
        <li className='about-project__list-item'>
          <div className='about-project__list-item-container'>
            <h3 className='about-project__title'>Димпломный проект включал 5 этапов</h3>
            <p className='about-project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
        </li>

        <li className='about-project__list-item'>
          <div className='about-project__list-item-container'>
            <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </li>
      </ul>

      <div className='about-project__timing-container'>
        <p className='about-project__timing-text about-project__timing-text_active'>1 неделя</p>
        <p className='about-project__timing-backend'>Back-end</p>
        <p className='about-project__timing-text'>4 недели</p>
        <p className='about-project__timing-frontend'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
