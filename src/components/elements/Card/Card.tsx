import styles from './Card.module.scss';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import { setInfo } from '../../../redux/slices/cardSlice';
import { IconButton } from '../../ui/IconButton/IconButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setLike } from '../../../redux/slices/cardSlice';

type CardProps = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
};

export const Card: React.FC<CardProps> = ({ id, firstName, lastName, avatar, email }) => {
  const dispatch = useAppDispatch();
  const isLiked = useSelector((state: RootState) => state.card.likes[id]);

  const onClickCard = () => {
    dispatch(setInfo({ firstName, lastName, avatar, email }));
  };

  const onClickLike = () => {
    dispatch(setLike(id));
  };

  return (
    <li className={styles.item}>
      <Link to="/profile" onClick={onClickCard}>
        <div className={styles.card}>
          <div className={styles.wrapper}>
            <img className={styles.avatar} src={avatar} alt={firstName + ' ' + lastName} />
          </div>
          <p className={styles.name}>{firstName + ' ' + lastName}</p>
        </div>
      </Link>
      <IconButton
        className={isLiked ? `${styles.liked} ${styles.like}` : styles.like}
        onClick={onClickLike}
      />
    </li>
  );
};
