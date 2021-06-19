import Auth from '../Auth/Auth';

function Login({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <Auth
      title='Рады видеть!'
      button='Войти'
      handleSubmit={handleSubmit}
      text='Еще не зарегистрированы?'
      linkText='Регистрация'
      linkTo='/signup'
      path='/signin'
      className='auth__container_signin'
    >
      <label className='auth__label'>
        <p className='auth__input-title'>E-mail</p>
        <input
          id='email__input'
          type='email'
          name='email'
          placeholder='E-mail'
          className='auth__field'
          minLength='1'
          maxLength='40'
          required
        />
        <span id='auth__input-error' className='auth__input-error-text auth__input-err_hidden'>
          Неправильные данные...
        </span>
      </label>
      <label className='auth__label'>
        <p className='auth__input-title'>Пароль</p>
        <input
          id='password__input'
          type='password'
          name='password'
          defaultValue=''
          placeholder='Пароль'
          className='auth__field auth__input-error'
          minLength='2'
          maxLength='200'
          required
        />
        <span id='auth__input-error' className='auth__input-error-text auth__input-err_hidden'>
          Неправильные данные...
        </span>
      </label>
    </Auth>
  );
}

export default Login;