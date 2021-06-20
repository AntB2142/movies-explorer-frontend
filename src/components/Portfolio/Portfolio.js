import './Portfolio.css';


function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='protfolio__list'>
            <li className='protfolio__element'>
            <a 
            href='https://github.com' 
            target='_blank' 
            rel='noreferrer' 
            className='protfolio__link'
            >
              <span>Статичный сайт</span>
              <span>↗</span>
            </a>
          </li>
                <li className='protfolio__element'>
                <a 
                href='https://github.com' 
                target='_blank' 
                rel='noreferrer' 
                className='protfolio__link'
                >
              <span>Адаптивный сайт</span>
              <span>↗</span>
            </a>
                </li>
                <li className='protfolio__element'>
                <a 
                href='https://github.com' 
                target='_blank' 
                rel='noreferrer' 
                className='protfolio__link'
                >
              <span>Одностраничное приложение</span>
              <span>↗</span>
            </a>
                </li>
            </ul>
        </div>
        
  );
}

export default Portfolio;