import './AboutMe.css';
import studentImage from '../../images/student.svg';


function AboutMe() {
    return (
    <div className='aboutme' id='student'>
       <div className='student__title-block'>
        <h2 className='student__title'>Студент</h2>
      </div>
        <div className='student'>
          <div className='student__container'>
            <h2 className='student__name'>Виталий</h2>
            <p className='student__status'>Фронтенд-разработчик, 30 лет</p>
            <p className='student__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className='student__links'>
              <li className='student__link-item'>
                <a 
                href='https://www.facebook.com' 
                rel='noreferrer' 
                target='_blank' 
                className='student__link'
                >
                  Facebook
                </a>
                </li>
              <li className='student__link-item'>
                <a href='https://github.com' 
                rel='noreferrer' 
                target='_blank' 
                className='student__link'
                >
                  Github
                  </a>
                  </li>
            </ul>
          </div>
          <img src={studentImage} alt='Фото студента' className='student__image' />
        </div>
        
    </div>
  );
}

export default AboutMe;