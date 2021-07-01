import Auth from '../Auth/Auth';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { SIGNIN_PAGE, SIGNUP_PAGE } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Register({ onRegister, errorMessage, loader }) {
  const { inputValues, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(inputValues);
  }


  return (
    <Auth
    title='Добро пожаловать!'
    button='Зарегистрироваться'
    handleSubmit={handleSubmit}
    text='Уже зарегистрированы?'
    linkText='Войти'
    linkTo={SIGNIN_PAGE}
    path={SIGNUP_PAGE}
    isDisabled={!isValid}
    errorMessage={errorMessage}
    >
      {loader && <Preloader />}
      <label className='auth__label'>
        <p className='auth__input-title'>Имя</p>
        <input
          id='name__input'
          type='text'
          name='name'
          value={inputValues.name || ''}
          placeholder='Как вас зовут?'
          className='auth__field'
          minLength='2'
          maxLength='200'
          required
          onChange={handleChange}
        />
        <span id='auth__input-error' className='auth__input-error-text'>
          {errors.name}
        </span>
      </label>

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

export default Register;