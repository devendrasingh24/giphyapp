import { useState } from 'react';
import styles from './SearchForm.module.css';
export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      onSubmit(value);
    }
  };
  const changeHandler = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.controlGroup}>
        <input
          className={styles.nativeInput}
          type='text'
          onChange={changeHandler}
          placeholder="Search"
          value={value}
          name='search'
          title='enter search query'
        />
        <button className={styles.button}>Search</button>
      </div>
    </form>
  );
};
