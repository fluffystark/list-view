import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  className: 'input',
  placeholder: '',
};

export default function Input(props) {
  const {
    className, value, handleChange, placeholder,
  } = props;

  return (
    <input
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}


Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
