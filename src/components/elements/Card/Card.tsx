import styles from './Card.module.scss';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import { setCard } from '../../../redux/slices/cardSlice';

type CardProps = {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
};

export const Card: React.FC<CardProps> = ({ firstName, lastName, avatar, email }) => {
  const dispatch = useAppDispatch();

  const onClickCard = () => {
    dispatch(setCard({ firstName, lastName, avatar, email }));
  };

  return (
    <li>
      <Link to="/profile" onClick={onClickCard}>
        <div className={styles.card}>
          <div className={styles.wrapper}>
            <img className={styles.avatar} src={avatar} alt={firstName + ' ' + lastName} />
          </div>
          <p className={styles.name}>{firstName + ' ' + lastName}</p>
        </div>
      </Link>
    </li>
  );
};
