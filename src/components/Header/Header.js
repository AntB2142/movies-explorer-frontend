import './Header.css';
import logo from '../../images/logo.svg';
import { Route, Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  let location = useLocation();

  return (
    <header
      className={`header ${
        (location.pathname === '/signup' && 'header__auth-page') ||
        (location.pathname === '/signin' && 'header__auth-page')
      }`}
    >
      <div className='header__container'>
        <a className='header__logo-link' href='/#'>
          <img className='header__logo' src={logo} alt='Логотип' />
        </a>

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

        <Route exact path='/movies'>
          <Navigation />
        </Route>

        <Route exact path='/saved-movies'>
          <Navigation />
        </Route>

        <Route exact path='/profile'>
          <Navigation />
        </Route>
      </div>
    </header>
  );
}

export default Header;