import React, {
  useState, useEffect, useContext, lazy,
} from 'react';
import { UserContext } from '../Provider';
import Loading from '../components/__generics/Loading';

const UserList = lazy(() => import('../components/User/UserList'));

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const user = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    user.loadUsers();
  }, []);

  return (
    <>
      { isLoading
        ? <Loading />
        : <UserList /> }
    </>
  );
}
