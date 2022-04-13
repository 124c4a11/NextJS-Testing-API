import type { NextPage } from 'next';
import { Context } from 'next-redux-wrapper';
import { END } from 'redux-saga';
import { useAppSelector } from '../hooks/redux.hooks';

import { wrapper } from '../store';
import { usersFetchRequest } from '../store/reducers/usersReducer/usersReducer';
import { getUsersState } from '../store/reducers/usersReducer/usersSelectors';

import styles from '../styles/Home.module.css';


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: Context) => {
    store.dispatch(usersFetchRequest());

    store.dispatch(END)
    await store.sagaTask?.toPromise();

    return { props: {} };
  }
);


const Home: NextPage = () => {
  const { users, error } = useAppSelector(getUsersState);

  return (
    <div className={styles.container}>
      {error && <h2>Error: {error}</h2>}
      {
        users
          ?
          <ul>
            {users.map(({ id, name }) => (
              <li key={id}>{id}. {name}</li>
            ))}
          </ul>
          :
          <h2>List is empty</h2>
      }
    </div>
  )
}


export default Home;
