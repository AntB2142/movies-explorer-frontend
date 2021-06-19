import './NotFoundPage.css';

import { useHistory} from 'react-router-dom' 

function NotFoundPage() {
    const history = useHistory();

    return (
    <div className='not-found'>
        <div className='not-found__container'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__subtitle'>Страница не найдена</p>
        </div>
        <button onClick={history.goBack} type='button' className='not-found__link'>Назад</button>
        
    </div>
  );
}

export default NotFoundPage;