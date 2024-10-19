import styles from './Home.module.scss';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';

import { fetchUsers, usersSelector } from '../../redux/slices/usersSlice';
import { setCount } from '../../redux/slices/cardSlice';
import { useWindowSize } from '../../hooks/useWindowSize';

import { Card } from '../../components/elements/Card/Card';
import { Button } from '../../components/ui/Button/Button';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(usersSelector);
  const { width } = useWindowSize();
  const count = useSelector((state: RootState) => state.card.count);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    width < 768 ? dispatch(setCount(4)) : dispatch(setCount(8));
  }, [width]);

  const showMore = () => {
    dispatch(setCount(count + 4));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Тестовое задание</h1>
      {/* {status === 'loading' && <Skeleton />} */}
      {status === 'success' && (
        <ul className={styles.grid}>
          {items.slice(0, count).map((user) => (
            <Card
              key={user.id}
              id={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              avatar={user.avatar}
              email={user.email}
            />
          ))}
        </ul>
      )}

      {count < items.length && (
        <div className={styles.button}>
          <Button text="Показать еще" onClick={showMore} />
        </div>
      )}
    </div>
  );
};
