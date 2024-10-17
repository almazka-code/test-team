import { ProfileName } from '../../elements/ProfileName/ProfileName';
import { Button } from '../../ui/Button/Button';
import styles from './Header.module.scss';
import { logout } from '../../../redux/slices/usersSlice';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';

export const Header: React.FC = () => {
  const { firstName, lastName, avatar } = useSelector((state: RootState) => state.card);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {location.pathname !== '/users' && (
          <Link to="./users">
            <Button className={styles.back} text="Назад" />
          </Link>
        )}
        {location.pathname !== '/profile' && (
          <div className={styles.content}>
            <h2 className={styles.title}>Наша команда</h2>
            <p className={styles.text}>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
              плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
            </p>
          </div>
        )}

        {location.pathname !== '/users' && (
          <ProfileName firstName={firstName} lastName={lastName} post="Партнер" avatar={avatar} />
        )}

        <Button className={styles.exit} text="Выход" onClick={handleLogout} />
      </div>
    </header>
  );
};
