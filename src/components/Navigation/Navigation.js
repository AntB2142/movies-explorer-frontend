import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import accountLogo from '../../images/account-icon.svg';


function Navigation() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  function clickNavButton() {
    setIsNavMenuOpen((prevState) => !prevState);
  }

  return (
    <div className='nav'>
      <button
        className={`nav__element-btn nav__element-btn_hidden link ${
          isNavMenuOpen && 'nav__close-btn_active'
        }`}
        type='button'
        onClick={clickNavButton}
      ></button>

      <nav
        className={`nav__container nav__container_hidden ${
          isNavMenuOpen && 'nav__container_active'
        }`}
      >
        <ul className='nav__list'>
          <li className='nav__list-element'>
            <NavLink
              className='nav__list-element-link nav__list-element-link_hidden link'
              exact
              to='/'
              activeClassName='nav__list-element-link_active'
            >
              Главная
            </NavLink>
          </li>
          <li className='nav__list-element'>
            <NavLink
              className='nav__list-element-link link'
              to='/movies'
              activeClassName='nav__list-element-link_active'
            >
              Фильмы
            </NavLink>
          </li>
          <li className='nav__list-element'>
            <NavLink
              className='nav__list-element-link link'
              to='/saved-movies'
              activeClassName='nav__list-element-link_active'
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className='nav__list-element'>
            <NavLink
              className='nav__list-element-link nav__list-element-profile link'
              to='/profile'
              
            >
              Аккаунт
            </NavLink>        
          </li>
          <img className='nav__list-element-logo' src={accountLogo} alt='Логотип' />
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;