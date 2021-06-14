import './NavTab.css';

function NavTab() {
  return (
    <nav className='navtab__nav'>
      <ul className='navtab__nav-list'>
        <li className='navtab__nav-list-item'>
          <a className='navtab__nav-list-item-link link' href='#about-project'>
            О проекте
          </a>
        </li>
        <li className='navtab__nav-list-item'>
          <a className='navtab__nav-list-item-link link' href='#techs'>
            Технологии
          </a>
        </li>
        <li className='navtab__nav-list-item'>
          <a className='navtab__nav-list-item-link link' href='#about-me'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
