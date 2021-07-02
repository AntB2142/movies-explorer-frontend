import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect, useState } from 'react';

function SearchForm({ handleSearchClick, toggleShortMovieFilter }) {
    const { inputValues, handleChange } = useFormWithValidation();
    const [errorMessage, setErrorMessage] = useState('');
    const searchQuery = inputValues.name;
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (searchQuery) {
        handleSearchClick(searchQuery);
        hideErrorMessage();
      } else {
        showErrorMessage();
      }
    }
  
    useEffect(() => {
      if (searchQuery !== '') {
        hideErrorMessage();
      } else {
        showErrorMessage();
      }
    }, [searchQuery]);
  
    function hideErrorMessage() {
      setErrorMessage('');
    }
  
    function showErrorMessage() {
      setErrorMessage('Нужно ввести ключевое слово');
    }
  
    return (
        <form className='searchform'>
            <div className='searchform__input-wrapper' noValidate>
                <img src={searchIcon} alt='search' className='searchform__search-icon' />
                <input
          name='name'
          className='searchform__input'
          placeholder='Фильм'
         value={inputValues.name || ''}
          onChange={handleChange}
          type='text'
          required
        >
        </input>
  
                <button type='submit' onClick={handleSubmit} className='searchform__button link'>Найти</button>
            </div>
            <FilterCheckbox toggleShortMovieFilter={toggleShortMovieFilter} />
            <span className={`search__input-error_hidden ${errorMessage && 'search__input-error'}`}>
          {errorMessage}
        </span>
        </form>
    );
}

export default SearchForm;