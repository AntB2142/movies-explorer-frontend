import './NavTab.css';

function NavTab() {
    return (
        <ul className='navtab'>
            <li className='navtab__element'> <a href='#about' className='navtab__button'>
            О проекте
          </a></li>
            <li className='navtab__element'><a href='#techs' className='navtab__button'>
            Технологии
          </a></li>
            <li className='navtab__element'><a href='#student' className='navtab__button'>
            Студент
          </a></li>
        </ul>
  );
}

export default NavTab;