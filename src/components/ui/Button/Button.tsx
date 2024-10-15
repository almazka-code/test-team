import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${className} `}
      type='button'
      onClick={onClick}>
      {text}
    </button>
  )
}
