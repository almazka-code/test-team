import styles from './Register.module.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import {
  toggleShowPassword,
  toggleShowConfirmPassword,
} from '../../redux/slices/passwordVisibility';
import { RootState } from '../../redux/store';
import { InputField } from '../../components/ui/InputField/InputField';
import { PasswordInputField } from '../../components/ui/PasswordInputField/PasswordInputField';

interface FormData {
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
  } = useForm<FormData>({
    mode: 'all',
  });

  const onSubmit = () => {
    reset();
    navigate('/users');
  };

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

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
                value: 6,
                message: 'Пароль должен быть не менее 6 символов',
              },
            })}
            hasValue={!!password}
          />

          <PasswordInputField
            label="Подтвердите пароль"
            placeholder="******"
            isPasswordVisible={showConfirmPassword}
            togglePasswordVisibility={() => dispatch(toggleShowConfirmPassword())}
            error={errors.confirmPassword?.message}
            register={register('confirmPassword', {
              required: 'Подтверждение пароля обязательно',
              validate: (value) => value === password || 'Пароли не совпадают',
            })}
            hasValue={!!confirmPassword}
          />
        </div>
        <button className={styles.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
