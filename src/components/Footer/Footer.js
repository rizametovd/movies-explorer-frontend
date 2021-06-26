import {
  USER_FACEBOOK_PROFILE_PAGE,
  USER_GITHUB_PROFILE_PAGE,
  YANDEX_PRACTIKUM_PAGE,
} from '../../utils/constants';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__about-text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className='footer__container'>
        <ul className='footer__links-list'>
          <li className='footer__links-list-item'>
            <a
              className='footer__link link'
              href={YANDEX_PRACTIKUM_PAGE}
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__links-list-item'>
            <a
              className='footer__link link'
              href={USER_GITHUB_PROFILE_PAGE}
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
          <li className='footer__links-list-item'>
            <a
              className='footer__link link'
              href={USER_FACEBOOK_PROFILE_PAGE}
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
        <p className='footer__copyright'>&copy;2021</p>
      </div>
    </footer>
  );
}

export default Footer;
