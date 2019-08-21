import React, { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { UserContext } from '../../Provider';
import Box from '../__generics/Box';
import UserItem from './UserItem';

export default function UserList() {
  const user = useContext(UserContext);

  return (
    <Box>
      <div className="user-list">
        <InfiniteScroll
          pageStart={0}
          loadMore={setTimeout(user.loadUsers, 1000)}
          hasMore={user.page < user.lastPage}
          threshold={0}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={false}
        >
          {user.users.map((el) => <UserItem user={el} />)}
        </InfiniteScroll>
        {user.page >= user.lastPage
          && <div>No more users to load.</div>}
      </div>
    </Box>
  );
}
