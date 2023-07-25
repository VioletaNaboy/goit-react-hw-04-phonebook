import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
export const Filter = ({ filter, handleFilterChange }) => {
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
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
export default Filter;
