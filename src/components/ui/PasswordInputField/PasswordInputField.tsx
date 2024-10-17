import { InputField } from '../InputField/InputField';
import styles from './PasswordInputField.module.scss';

interface PasswordInputFieldProps {
  label: string;
  placeholder: string;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  error?: string;
  register: React.InputHTMLAttributes<HTMLInputElement>;
  hasValue: boolean;
}

export const PasswordInputField: React.FC<PasswordInputFieldProps> = ({
  label,
  placeholder,
  isPasswordVisible,
  togglePasswordVisibility,
  error,
  register,
  hasValue,
}) => {
  return (
    <div className={styles.group}>
      <InputField
        type={isPasswordVisible ? 'text' : 'password'}
        label={label}
        placeholder={placeholder}
        error={error}
        register={register}
      />
      {hasValue && (
        <button
          type="button"
          className={`${styles.eye} ${isPasswordVisible ? styles.on : styles.off}`}
          onClick={togglePasswordVisibility}
        ></button>
      )}
    </div>
  );
};
