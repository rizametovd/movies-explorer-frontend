import './AboutMe.css';
import myPhoto from '../../images/myphoto.jpg';
import { USER_FACEBOOK_PROFILE_PAGE, USER_GITHUB_PROFILE_PAGE } from '../../utils/constants';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__section-title'>Студент</h2>

      <div className='about-me__container-info'>
        <img className='about-me__photo' src={myPhoto} alt='Мое фото' />

        <div className='about-me__profile-container'>
          <h3 className='about-me__name'>Виталий</h3>
          <p className='about-me__info'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__bio'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className='about-me__social-links-list'>
            <li className='about-me__social-links-list-item'>
              <a
                className='about-me__social-link'
                href={USER_FACEBOOK_PROFILE_PAGE}
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>

            <li className='about-me__social-links-list-item'>
              <a
                className='about-me__social-link'
                href={USER_GITHUB_PROFILE_PAGE}
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
