import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  className: '',
};

export default function Box(props) {
  const { className, children } = props;

  return (
    <div className={`box ${className}`}>
      { children }
    </div>
  );
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
