import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default function UserItem(props) {
  const { user } = props;
  return (
    <div className="user-row">
      <LazyLoad height={128} overflow placeholder={<div className="img-placeholder" />}>
        <img src={user.avatar} alt="avatar" />
      </LazyLoad>
      <div className="user-name">
        {`${user.first_name} ${user.last_name}`}
      </div>
    </div>
  );
}

UserItem.propTypes = propTypes;
