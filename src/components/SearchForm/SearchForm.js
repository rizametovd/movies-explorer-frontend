import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './SearchForm.css';
import { useEffect, useState } from 'react';

function SearchForm({ handleSearchClick, toggleShortMovieFilter }) {
  const { inputValues, handleChange } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');
  const searchQuery = inputValues.name;

  function handleSubmit(e) {
    e.preventDefault();

    if (searchQuery) {
      handleSearchClick(searchQuery);
      hideErrorMessage();
    } else {
      showErrorMessage();
    }
  }

  useEffect(() => {
    if (searchQuery !== '') {
      hideErrorMessage();
    } else {
      showErrorMessage();
    }
  }, [searchQuery]);

  function hideErrorMessage() {
    setErrorMessage('');
  }

  function showErrorMessage() {
    setErrorMessage('Нужно ввести ключевое слово');
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <input
          name='name'
          className='search__form-input'
          placeholder='Фильм'
          value={inputValues.name || ''}
          onChange={handleChange}
          type='text'
          required
          onFocus={hideErrorMessage}
          onBlur={hideErrorMessage}
        ></input>

        <button className='search__form-submit-btn link' type='submit'>
          Найти
        </button>
        <span className={`search__input-error_hidden ${errorMessage && 'search__input-error'}`}>
          {errorMessage}
        </span>
      </form>

      <FilterCheckbox toggleShortMovieFilter={toggleShortMovieFilter} />
    </section>
  );
}

export default SearchForm;
