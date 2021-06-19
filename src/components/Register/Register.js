import Auth from '../Auth/Auth';

function Register({ onRegister }) {
  function handleSubmit(e) {
    e.preventDefault();
    onRegister();
  }

  return (
    <Auth
      title='Добро пожаловать!'
      button='Зарегистрироваться'
      handleSubmit={handleSubmit}
      text='Уже зарегистрированы?'
      linkText='Войти'
      linkTo='/signin'
      path='/signup'
    >
      <label className='auth__label'>
        <p className='auth__input-title'>Имя</p>
        <input
          id='name__input'
          type='text'
          name='name'
          defaultValue=''
          placeholder='Ваше имя?'
          className='auth__field'
          minLength='2'
          maxLength='200'
          required
        />
        <span id='auth__input-error' className='auth__input-error-text auth__input-err_hidden'>
         Неправильные данные...
        </span>
      </label>

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
        <span id='auth__input-error' className='auth__input-error-text'>
        Неправильные данные...
        </span>
      </label>
    </Auth>
  );
}

export default Register;