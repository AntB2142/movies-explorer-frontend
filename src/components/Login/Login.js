import Auth from '../Auth/Auth';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { SIGNIN_PAGE, SIGNUP_PAGE } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Login({ onLogin, errorMessage, loader }) {
  const { inputValues, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(inputValues);
  }

  return (
    <Auth
      title='Рады видеть!'
      button='Войти'
      handleSubmit={handleSubmit}
      text='Еще не зарегистрированы?'
      linkText='Регистрация'
      linkTo={SIGNUP_PAGE}
      path={SIGNIN_PAGE}
      className='auth__container_signin'
      isDisabled={!isValid}
      errorMessage={errorMessage}
    >
      {loader && <Preloader />}
      <label className='auth__label'>
        <p className='auth__input-title'>E-mail</p>
        <input
          id='email__input'
          type='email'
          name='email'
          value={inputValues.email || ''}
          placeholder='E-mail'
          className='auth__field'
          minLength='1'
          maxLength='40'
          required
          onChange={handleChange}
        />
        <span id='auth__input-error' className='auth__input-error-text'>
          {errors.email}
        </span>
      </label>
      <label className='auth__label'>
        <p className='auth__input-title'>Пароль</p>
        <input
          id='password__input'
          type='password'
          name='password'
          value={inputValues.password || ''}
          placeholder='Пароль'
          className='auth__field auth__input-error'
          minLength='3'
          maxLength='20'
          required
          onChange={handleChange}
        />
        <span id='auth__input-error' className='auth__input-error-text'>
          {errors.password}
        </span>
      </label>
    </Auth>
  );
}

export default Login;