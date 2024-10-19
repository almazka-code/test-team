import styles from './Register.module.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { Link } from 'react-router-dom';
import {
  toggleShowPassword,
  toggleShowConfirmPassword,
} from '../../redux/slices/passwordVisibility';
import { registerUser } from '../../redux/slices/registerSlice';
import { RootState } from '../../redux/store';
import { InputField } from '../../components/ui/InputField/InputField';
import { PasswordInputField } from '../../components/ui/PasswordInputField/PasswordInputField';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { showPassword, showConfirmPassword } = useSelector(
    (state: RootState) => state.passwordVisibility
  );

  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormData>({
    mode: 'all',
  });

  const onSubmit = async (data: RegisterFormData) => {
    const { name, confirmPassword, ...registrationData } = data;
    const resultAction = await dispatch(registerUser(registrationData));

    if (registerUser.fulfilled.match(resultAction)) {
      reset();
      navigate('/users');
    } else {
      alert('Ошибка регистрации');
    }
  };

  const password = watch('password');

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Регистрация</h2>

        <div className={styles.flex}>
          <InputField
            label="Имя"
            type="text"
            placeholder="Артур"
            error={errors.name?.message}
            register={register('name', {
              required: 'Имя обязательно для заполнения',
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё]+$/i,
                message: 'Можно вводить только буквы',
              },
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
            })}
          />

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
            isPasswordVisible={showPassword}
            togglePasswordVisibility={() => dispatch(toggleShowPassword())}
            error={errors.password?.message}
            register={register('password', {
              required: 'Пароль обязателен для заполнения',
              minLength: {
                value: 8,
                message: 'Пароль должен быть не менее 8 символов',
              },
            })}
          />

          <PasswordInputField
            label="Подтвердите пароль"
            placeholder="******"
            isPasswordVisible={showConfirmPassword}
            togglePasswordVisibility={() => dispatch(toggleShowConfirmPassword())}
            error={errors.confirmPassword?.message}
            register={register('confirmPassword', {
              required: 'Подтверждение пароля обязательно',
              validate: value => value === password || 'Пароли не совпадают',
            })}
          />
        </div>
        <button className={styles.button} type="submit">
          Зарегистрироваться
        </button>
        <div className={styles.info}>
          <p>Уже есть аккаунт?</p>
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};
