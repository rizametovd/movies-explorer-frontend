import './Profile.css';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();

  function onSignOut() {
    history.push('/signin');
  }

  return (
    <section className='profile'>
      <form className='profile__form'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <div className='profile__container'>
          <label className='profile__label'>
            <div className='profile__label-container'>
              <p className='profile__input-title'>Имя</p>
              <input
                id='name__input'
                type='text'
                name='name'
                placeholder='Изменить имя'
                defaultValue='Виталий'
                className='profile__field'
                minLength='2'
                maxLength='200'
                required
                // onChange={handleAddPassword}
              />
            </div>

            <span
              id='profile__input-error'
              className='profile__input-error-text profile__input-err_hidden'
            >
              Что-то пошло не так...
            </span>
          </label>

          <label className='profile__label'>
            <div className='profile__label-container'>
              <p className='profile__input-title'>E-mail</p>
              <input
                id='email__input'
                type='email'
                name='email'
                placeholder='Изменить E-mail'
                defaultValue='pochta@yandex.ru'
                className='profile__field'
                minLength='1'
                maxLength='40'
                required
                // onChange={handleAddEmail}
              />
            </div>

            <span
              id='profile__input-error'
              className='profile__input-error-text profile__input-err_hidden'
            >
              Что-то пошло не так...
            </span>
          </label>
        </div>
        <button className='profile__edit-button link' type='submit'>
          Редактировать
        </button>

        <button className='profile__signout-btn link' type='button' onClick={onSignOut}>
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
