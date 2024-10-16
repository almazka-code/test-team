import styles from './Home.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { fetchUsers, usersSelector } from '../../redux/slices/usersSlice';

import { Card } from '../../components/elements/Card/Card';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(usersSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {/* {status === 'loading' && <Skeleton />} */}
      {status === 'success' && (
        <ul className={styles.grid}>
          {items.map((user) => (
            <Card
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              avatar={user.avatar}
              email={user.email}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
