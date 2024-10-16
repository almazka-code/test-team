import styles from './Register.module.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const onSubmit = (data: FormData) => {
    localStorage.setItem('user', JSON.stringify(data));
    reset();
    navigate('/users');
  };

  const password = watch('password');

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Регистрация</h2>
        <div className={styles.item}>
          <label className={styles.label}>Имя</label>
          <input
            type="text"
            className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
            placeholder="Артур"
            {...register('name', {
              required: 'Имя обязательно для заполнения',
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
            })}
          />
          <div className={styles.error}>{errors.name && <p>{errors.name.message}</p>}</div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Электронная почта</label>
          <input
            type="email"
            className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
            placeholder="example@mail.ru"
            {...register('email', {
              required: 'Email обязателен для заполнения',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Неверный формат email',
              },
            })}
          />
          <div className={styles.error}>{errors.email && <p>{errors.email.message}</p>}</div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Пароль</label>
          <input
            type="password"
            className={`${styles.input} ${errors.password ? styles.invalid : ''}`}
            placeholder="******"
            {...register('password', {
              required: 'Пароль обязателен для заполнения',
              minLength: {
                value: 6,
                message: 'Пароль должен быть не менее 6 символов',
              },
            })}
          />
          <div className={styles.error}>{errors.password && <p>{errors.password.message}</p>}</div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Подтвердите пароль</label>
          <input
            type="password"
            className={`${styles.input} ${errors.confirmPassword ? styles.invalid : ''}`}
            placeholder="******"
            {...register('confirmPassword', {
              required: 'Подтверждение пароля обязательно',
              validate: (value) => value === password || 'Пароли не совпадают',
            })}
          />
          <div className={styles.error}>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <button className={styles.button} type="submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
