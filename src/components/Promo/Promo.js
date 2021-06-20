import './Promo.css';

import NavTab from '../NavTab/NavTab'

function Promo() {
    return (
    <div className='promo'>
        <div className='promo__text-wrapper'>
            <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
        </div>
        <NavTab />
    </div>
  );
}

export default Promo;