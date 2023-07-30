import { useState } from 'react';
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css";

function Searchbar({ onChange }) {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert('Input field is empty!');
    }
    onChange(value);
    setValue('');
  };

  const handleChange = e => {
    setValue( e.currentTarget.value );
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={css.SearchFormInput}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
};