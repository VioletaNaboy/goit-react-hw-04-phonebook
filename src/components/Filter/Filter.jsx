import React, { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search contacts"
        />
      </label>
    );
  }
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
}
