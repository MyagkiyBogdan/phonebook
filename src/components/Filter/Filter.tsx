import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter, getFilter } from 'redux/filterSlice';
import React from 'react';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <>
      <label htmlFor="name" className={styles.label}>
        Find contact by name:
      </label>
      <input
        className={styles.input}
        onChange={handleChangeFilter}
        value={filter}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

export default Filter;
