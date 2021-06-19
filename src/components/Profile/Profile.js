import './Profile.css';
import { useHistory } from 'react-router-dom';


function Profile() {
    const history = useHistory();
  
    function onSignOut() {
      history.push('/signin');
    }
    return (
    <div className='profile'>
        <div className='profile__info-wrapper'>
            <h1 className='profile__heading'>Привет, Виталий</h1>
            <ul className='profile__list'>
                <li className='profile__elem'>
                    <p className='profile__data'>Имя</p>
                    <input
                id='name__input'
                type='text'
                name='name'
                placeholder='Изменить имя'
                defaultValue='Виталий'
                className='profile__field'
                minLength='2'
                maxLength='200'
                required
              />
                </li>
                <li className='profile__elem'>
                    <p className='profile__data'>Почта</p>
                    <input
               id='email__input'
               type='email'
               name='email'
               placeholder='Изменить E-mail'
               defaultValue='pochta@yandex.ru'
               className='profile__field'
               minLength='1'
               maxLength='40'
               required
              />
                </li>
            </ul>
        </div>
        <div className='profile__buttons'>
            <button type='submit' className='profile__button'>Редактировать</button>
            <button type='button'  onClick={onSignOut} className='profile__button profile__button_red'>Выйти из аккаунта</button>
        </div>
    </div>
  );
}

export default Profile;