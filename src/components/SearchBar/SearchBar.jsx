import { useState } from 'react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a search query!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <input
          onChange={handleInputChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
