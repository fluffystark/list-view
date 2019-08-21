import React, { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Input from '../__generics/Input';
import { UserContext } from '../../Provider';
import Box from '../__generics/Box';
import UserItem from './UserItem';

export default function UserList() {
  const user = useContext(UserContext);

  return (
    <Box>
      <Input placeholder="Name" />
      <div className="user-list">
        <InfiniteScroll
          pageStart={0}
          loadMore={user.loadUsers}
          hasMore={user.page < user.lastPage}
          threshold={0}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={false}
        >
          {user.users.map((el) => <UserItem key={el.id} user={el} />)}
        </InfiniteScroll>
        {user.page >= user.lastPage
          && <div>No more users to load.</div>}
      </div>
    </Box>
  );
}
