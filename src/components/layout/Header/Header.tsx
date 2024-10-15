import { ProfileName } from '../../elements/ProfileName/ProfileName';
import { Button } from '../../ui/Button/Button';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Button className={styles.back} text="Назад" />
        {/* <div className={styles.content}>
          <h2 className={styles.title}>Наша команда</h2>
          <p className={styles.text}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
          </p>
        </div> */}

        <ProfileName
          firstName="Артур"
          lastName="Королёв"
          post="Партнер"
          avatar="https://reqres.in/img/faces/8-image.jpg"
        />
        <Button className={styles.exit} text="Выход" />
      </div>
    </header>
  );
};
