import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  function toggleCheckBox() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__text'>Короткометражки</p>
      <label className='filter-checkbox__toggle'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          id='toggle'
          onChange={toggleCheckBox}
        />
        <span className='filter-checkbox__input-visible'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
