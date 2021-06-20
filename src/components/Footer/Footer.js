import './Footer.css';

function Footer() {
    return (
    <footer className='footer'>
        <h2 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className='footer__info'>
        <span className='footer__title footer__title_copyright'>&copy; 2020</span>
            <ul className='footer__menu'>
                <li className='footer__menu-item'>
                  <a 
                  href='https://praktikum.yandex.ru/web/' 
                  rel='noreferrer' target='_blank' 
                  className='footer__menu-link'
                  >
                    Яндекс.Практикум
                    </a>
                    </li>
                <li className='footer__menu-item'>
                  <a href='https://github.com' 
                  rel='noreferrer' 
                  target='_blank' 
                  className='footer__menu-link'
                  >
                    Github
                    </a>
                    </li>
                <li className='footer__menu-item'>
                  <a 
                  href='https://www.facebook.com' 
                  rel='noreferrer' 
                  target='_blank' 
                  className='footer__menu-link'
                  >
                    Facebook
                    </a>
                    </li>
            </ul>
        </div>
    </footer>
  );
}
export default Footer;