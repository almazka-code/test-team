import { ProfileName } from '../../elements/ProfileName/ProfileName';
import { Button } from '../../ui/Button/Button';
import styles from './Header.module.scss';
import { logout } from '../../../redux/slices/usersSlice';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import { IconButton } from '../../ui/IconButton/IconButton';
import { setScreen } from '../../../redux/slices/screenSlice';
import { useEffect } from 'react';

export const Header: React.FC = () => {
  const { firstName, lastName, avatar } = useSelector((state: RootState) => state.card);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //выход
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/');
  };

  //для отображения кнопки выхода и назад в зависимости от ширины экрана
  const screen = useSelector((state: RootState) => state.screen.screen);

  const resize = () => {
    dispatch(setScreen(window.innerWidth > 768));
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.back}>
          {location.pathname !== '/users' && (
            <Link to="/users">
              {screen ? <Button text="Назад" /> : <IconButton className={styles.backButton} />}
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
          {screen ? (
            <Button text="Выход" onClick={handleLogout} />
          ) : (
            <IconButton className={styles.exitButton} onClick={handleLogout} />
          )}
        </div>
      </div>
    </header>
  );
};
