import './Profile.css';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import Preloader from '../Preloader/Preloader';

function Profile({ updateUserProfile, onSignOut, loader }) {
  const { inputValues, handleChange, errors, isValid } = useFormWithValidation();
  const { name, email } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { name: inputValues.name || name, email: inputValues.email || email };
    updateUserProfile(userData);
    setNoNameChanges(true);
    setNoEmailChanges(true);
  }

  const [noNameChanges, setNoNameChanges] = useState(true);
  const [noEmailChanges, setNoEmailChanges] = useState(true);

  function checkNameChange(e) {
    handleChange(e);
    name === e.target.value ? setNoNameChanges(true) : setNoNameChanges(false);
  }

  function checkEmailChange(e) {
    handleChange(e);
    email === e.target.value ? setNoEmailChanges(true) : setNoEmailChanges(false);
  }

  function handleSignOut() {
    onSignOut();
  }
    return (
    <div className='profile'>
      {loader && <Preloader />}
        <form className='profile__info-wrapper' onSubmit={handleSubmit} noValidate>
            <h1 className='profile__heading'>{`Привет, ${name}!`}</h1>
            <ul className='profile__list'>
                <li className='profile__elem'>
                    <p className='profile__data'>Имя</p>
                    <input
                id='name__input'
                type='text'
                name='name'
                defaultValue={name || ''}
                placeholder='Изменить имя'
                className='profile__field'
                minLength='2'
                maxLength='200'
                required
                onChange={checkNameChange}
              />
              <span id='profile__input-error' className='profile__input-error-text'>
              {errors.name}
            </span>
                </li>
                <li className='profile__elem'>
                    <p className='profile__data'>Почта</p>
                    <input
              id='email__input'
              type='email'
              name='email'
              defaultValue={email || ''}
              placeholder='Изменить E-mail'
              className='profile__field'
              minLength='1'
              maxLength='40'
              required
              onChange={checkEmailChange}
              />
                <span id='profile__input-error' className='profile__input-error-text'>
              {errors.email}
            </span>
                </li>
            </ul>
        </form>
        <div className='profile__buttons'>
            <button 
            type='submit' 
            className='profile__button'
            disabled={!isValid || (noNameChanges && noEmailChanges)}
            onClick={handleSubmit}
            >
              Редактировать
            </button>
            <button type='button'  onClick={handleSignOut} className='profile__button profile__button_red'>Выйти из аккаунта</button>
        </div>
    </div>
  );
}

export default Profile;