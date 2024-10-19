import styles from './IconButton.module.scss';

type IconButtonProps = {
  className: string;
  onClick?: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({ onClick, className }) => {
  return (
    <button type="button" className={`${styles.button} ${className} `} onClick={onClick}></button>
  );
};
