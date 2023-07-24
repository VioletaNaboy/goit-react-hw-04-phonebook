import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import css from './Filter.module.css';
export const Filter = () => {
  const { filter, handleFilterChange } = useContext(AppContext);

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
};
export default Filter;
