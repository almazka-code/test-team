import styles from './InputField.module.scss';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  register: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  error,
  register,
}) => {
  return (
    <div className={styles.item}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        className={`${styles.input} ${error ? styles.invalid : ''}`}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
