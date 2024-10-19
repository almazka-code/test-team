import styles from './ProfileName.module.scss';

type ProfileNameProps = {
  firstName: string;
  lastName: string;
  post: string;
  avatar: string;
};

export const ProfileName: React.FC<ProfileNameProps> = ({ firstName, lastName, post, avatar }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.avatar} src={avatar} alt={firstName + ' ' + lastName} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{firstName + ' ' + lastName}</p>
        <span className={styles.post}>{post}</span>
      </div>
    </div>
  );
};
