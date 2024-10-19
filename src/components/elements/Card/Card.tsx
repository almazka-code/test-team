import styles from './Card.module.scss';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import { setInfo } from '../../../redux/slices/cardSlice';

type CardProps = {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
};

export const Card: React.FC<CardProps> = ({ firstName, lastName, avatar, email }) => {
  const dispatch = useAppDispatch();

  const onClickCard = () => {
    dispatch(setInfo({ firstName, lastName, avatar, email }));
  };

  return (
    <Link to="/profile" onClick={onClickCard}>
      <li className={styles.card}>
        <div className={styles.wrapper}>
          <img className={styles.avatar} src={avatar} alt={firstName + ' ' + lastName} />
        </div>
        <p className={styles.name}>{firstName + ' ' + lastName}</p>
      </li>
    </Link>
  );
};
