import React from 'react';
import PropTypes from 'prop-types';
import Http from './endpoints/axios';

const propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserContext = React.createContext();

export default class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      page: 0,
      lastPage: 0,
    };
  }

  loadUsers = async () => {
    const { users, page } = this.state;
    Http.get(`users?page=${page + 1}&per_page=3`).then((response) => {
      this.setState({
        users: users.concat(response.data.data),
        page: response.data.page,
        lastPage: response.data.total_pages,
      });
    });
  };

  render() {
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          ...this.state,
          loadUsers: this.loadUsers,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

Provider.propTypes = propTypes;
