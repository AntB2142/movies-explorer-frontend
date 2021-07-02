import './FilterCheckbox.css';

function FilterCheckbox({ toggleShortMovieFilter }) {
  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__text'>Короткометражки</p>
      <label className='filter-checkbox__toggle'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          id='toggle'
          onChange={toggleShortMovieFilter}
        />
        <span className='filter-checkbox__input-visible'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
