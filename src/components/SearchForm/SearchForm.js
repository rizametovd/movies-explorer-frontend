import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input className='search__form-input' placeholder='Фильм' required></input>
        <button className='search__form-submit-btn link'>Найти</button>
      </form>

      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
