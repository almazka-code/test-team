import styles from './PasswordInputField.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { InputField } from '../InputField/InputField';

interface PasswordInputFieldProps {
  label: string;
  placeholder: string;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  error?: string;
  register: ReturnType<UseFormRegister<any>>;
}

export const PasswordInputField: React.FC<PasswordInputFieldProps> = ({
  label,
  placeholder,
  isPasswordVisible,
  togglePasswordVisibility,
  error,
  register,
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

      <button
        type="button"
        className={`${styles.eye} ${isPasswordVisible ? styles.on : styles.off}`}
        onClick={togglePasswordVisibility}
      ></button>
    </div>
  );
};
