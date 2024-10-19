import styles from './Header.module.scss';

import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';

import { useWindowSize } from '../../../hooks/useWindowSize';
import { logout } from '../../../redux/slices/usersSlice';

import { Button } from '../../ui/Button/Button';
import { IconButton } from '../../ui/IconButton/IconButton';
import { ProfileName } from '../../elements/ProfileName/ProfileName';

export const Header: React.FC = () => {
  const { firstName, lastName, avatar } = useSelector((state: RootState) => state.card.info);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();

  //выход
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.back}>
          {location.pathname !== '/users' && (
            <Link to="/users">
              {width > 768 ? <Button text="Назад" /> : <IconButton className={styles.backButton} />}
            </Link>
          )}
        </div>
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

        <div className={styles.exit}>
          {width > 768 ? (
            <Button text="Выход" onClick={handleLogout} />
          ) : (
            <IconButton className={styles.exitButton} onClick={handleLogout} />
          )}
        </div>
      </div>
    </header>
  );
};
