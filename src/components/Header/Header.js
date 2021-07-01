import './Header.css';
import logo from '../../images/logo.svg';
import { Route, Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import { MAIN_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from '../../utils/constants';

function Header({ loggedIn }) {
  const location = useLocation();


  return (
    <header
    className={`header 
    ${
      (location.pathname === SIGNUP_PAGE && 'header__auth-page') ||
      (location.pathname === SIGNIN_PAGE && 'header__auth-page')
    }
    `}
  >
      <div className='header__container'>
      <Link className='header__logo-link' to={MAIN_PAGE}>
          <img className='header__logo' src={logo} alt='Логотип' />
        </Link>
        {loggedIn && <Navigation />}
        {!loggedIn && (
        <div className='header__auth'>
          <Route exact path='/'>
            <Link className='header__auth header__auth_signup link' to='/signup'>
              Регистрация
            </Link>

            <Link className='header__auth header__auth_signin link' to='/signin'>
              Войти
            </Link>
          </Route>
        </div>
        )}
      </div>
    </header>
  );
}

export default Header;