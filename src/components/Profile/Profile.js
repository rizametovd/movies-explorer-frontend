import './Profile.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ updateUserProfile, onSignOut }) {
  const { inputValues, handleChange, errors, isValid } = useFormWithValidation();
  const { name, email } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { name: inputValues.name || name, email: inputValues.email || email };
    updateUserProfile(userData);
  }

  function handleSignOut() {
    onSignOut();
  }

  return (
    <section className='profile'>
      <form className='profile__form' onSubmit={handleSubmit} noValidate>
        <h2 className='profile__title'>{`Привет, ${name}!`}</h2>
        <div className='profile__container'>
          <label className='profile__label'>
            <div className='profile__label-container'>
              <p className='profile__input-title'>Имя</p>
              <input
                id='name__input'
                type='text'
                name='name'
                defaultValue={name || ''}
                placeholder='Изменить имя'
                className='profile__field'
                minLength='2'
                maxLength='200'
                required
                onChange={handleChange}
              />
            </div>

            <span id='profile__input-error' className='profile__input-error-text'>
              {errors.name}
            </span>
          </label>

          <label className='profile__label'>
            <div className='profile__label-container'>
              <p className='profile__input-title'>E-mail</p>
              <input
                id='email__input'
                type='email'
                name='email'
                defaultValue={email}
                placeholder='Изменить E-mail'
                className='profile__field'
                minLength='1'
                maxLength='40'
                required
                onChange={handleChange}
              />
            </div>

            <span id='profile__input-error' className='profile__input-error-text'>
              {errors.email}
            </span>
          </label>
        </div>
        <button className='profile__edit-button link' type='submit' disabled={!isValid}>
          Редактировать
        </button>

        <button className='profile__signout-btn link' type='button' onClick={handleSignOut}>
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
