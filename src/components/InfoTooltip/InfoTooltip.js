import './InfoTooltip.css';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg';

function InfoTooltip({ status, onClose }) {
  return (
    <div className={`popup ${status && 'popup_opened'}`}>
      <div className='popup__container popup__container_img'>
        <button
          className='popup__close-button button'
          type='button'
          aria-label='Закрыть попап'
          onClick={onClose}
        ></button>
        <img
          className='popup__img-status'
          src={`${status === 'success' ? success : fail}`}
          alt={`${status === 'success' ? 'Успешная регистрация' : 'Что-то пошло не так'}`}
        />
        <h2 className='popup__title popup__title_img'>{`${
          status === 'success'
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте еще раз.'
        }`}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
