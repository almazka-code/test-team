import styles from './Card.module.scss';

type CardProps = {
  firstName: string;
  lastName: string;
  avatar: string;
};

export const Card: React.FC<CardProps> = ({ firstName, lastName, avatar }) => {
  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <img className={styles.avatar} src={avatar} alt={firstName + ' ' + lastName} />
      </div>
      <p className={styles.name}>{firstName + ' ' + lastName}</p>
    </li>
  );
};
