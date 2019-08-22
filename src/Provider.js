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
      searchName: '',
      page: 0,
      lastPage: 0,
    };
  }

  loadUsers = async () => {
    const { users, page } = this.state;
    Http.get(`users?page=${page + 1}`).then((response) => {
      this.setState({
        users: users.concat(response.data.data),
        page: response.data.page,
        lastPage: response.data.total_pages,
      });
    });
  };

  searchNameChanged = (searchName) => {
    this.setState({ searchName });
  }

  searchList = () => {
    const { searchName, users } = this.state;

    return searchName
      ? users.filter((user) => {
        const name = `${user.first_name} ${user.last_name}`;
        return name.toLowerCase().indexOf(searchName.toLowerCase()) > -1;
      })
      : users;
  }

  render() {
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          ...this.state,
          loadUsers: this.loadUsers,
          searchNameChanged: this.searchNameChanged,
          searchList: this.searchList,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

Provider.propTypes = propTypes;
