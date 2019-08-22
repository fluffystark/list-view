import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Input from '../__generics/Input';
import { UserContext } from '../../Provider';
import Box from '../__generics/Box';
import UserItem from './UserItem';

export default function UserList() {
  return (
    <UserContext.Consumer>
      {({
        loadUsers, page, lastPage, searchList, searchName, searchNameChanged,
      }) => (
        <Box>
          <Input
            placeholder="Name"
            value={searchName}
            handleChange={searchNameChanged}
          />
          <div className="user-list">
            <InfiniteScroll
              pageStart={0}
              loadMore={loadUsers}
              hasMore={page < lastPage}
              threshold={10}
              loader={<div className="loader" key={0}>Loading ...</div>}
              useWindow={false}
            >
              {searchList().map((el) => <UserItem key={el.id} user={el} />)}
            </InfiniteScroll>
            {page >= lastPage
              && <div className="end-of-list">No more users to load.</div>}
          </div>
        </Box>
      )}
    </UserContext.Consumer>
  );
}
