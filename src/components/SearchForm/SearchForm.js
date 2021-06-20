import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

function SearchForm() {
    return (
        <form className='searchform'>
            <div className='searchform__input-wrapper'>
                <img src={searchIcon} alt='search' className='searchform__search-icon' />
                <input type='text' placeholder='Фильм' required className='searchform__input' />
                <button type='submit' className='searchform__button link'>Найти</button>
            </div>

            <div className='searchform__switch'>
            <label className='switch'>
            <input type='checkbox'/>
            <span className='slider round'></span>
          </label>
                <p className='searchform__shorts'>Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;