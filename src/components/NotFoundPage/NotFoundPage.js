import './NotFoundPage.css';

function NotFoundPage({ goBack }) {
    return (
    <div className='not-found'>
        <div className='not-found__container'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__subtitle'>Страница не найдена</p>
        </div>
        <button  onClick={goBack} type='button' className='not-found__link'>Назад</button>
        
    </div>
  );
}

export default NotFoundPage;