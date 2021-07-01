import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './Auth.css';

function Auth({
  title,
  button,
  handleSubmit,
  children,
  text,
  linkText,
  linkTo,
  path,
  className,
  isDisabled,
  errorMessage,
}) {
  return (
    <div className='auth'>
      <form className='auth__form' onSubmit={handleSubmit}>
        <h2 className='auth__title'>{title}</h2>
        <div className={`auth__container ${className}`}>{children}</div>
        <button 
        className='auth__submit-button button auth__button' 
        type='submit'
        disabled={isDisabled}
        >
          {button}
        </button>
        {errorMessage && <p className='auth__error-message'>{errorMessage}</p>}
        <p className='auth__text'>
          {text}
          <Route path={path}>
            <Link className='auth__text-link button' to={linkTo}>
              {' '}
              {linkText}
            </Link>
          </Route>
        </p>
      </form>
    </div>
  );
}

export default Auth;