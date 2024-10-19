import styles from './Register.module.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { toggleShowLoginPassword } from '../../redux/slices/passwordVisibility';
import { loginUser } from '../../redux/slices/loginSlice';
import { RootState } from '../../redux/store';
import { InputField } from '../../components/ui/InputField/InputField';
import { PasswordInputField } from '../../components/ui/PasswordInputField/PasswordInputField';
import { Link } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginPassword = useSelector(
    (state: RootState) => state.passwordVisibility.showLoginPassword,
  );

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    mode: 'all',
  });

  const onSubmit = async (data: LoginFormData) => {
    const resultAction = await dispatch(loginUser(data));

    if (loginUser.fulfilled.match(resultAction)) {
      reset();
      navigate('/users');
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={`${styles.form} ${styles.login}`} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Войти</h2>

        <div className={styles.flex}>
          <InputField
            label="Электронная почта"
            type="email"
            placeholder="example@mail.ru"
            error={errors.email?.message}
            register={register('email', {
              required: 'Email обязателен для заполнения',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Неверный формат email',
              },
            })}
          />

          <PasswordInputField
            label="Пароль"
            placeholder="******"
            isPasswordVisible={loginPassword}
            togglePasswordVisibility={() => dispatch(toggleShowLoginPassword())}
            error={errors.password?.message}
            register={register('password', {
              required: 'Пароль обязателен для заполнения',
              minLength: {
                value: 6,
                message: 'Пароль должен быть не менее 6 символов',
              },
            })}
          />
        </div>
        <button className={styles.button} type="submit">
          Войти
        </button>
        <div className={styles.info}>
          <p>Ещё нет аккаунта?</p>
          <Link to="/" className={styles.link}>
            Зарегистрируйтесь
          </Link>
        </div>
      </form>
    </div>
  );
};
