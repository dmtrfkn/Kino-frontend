import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  color: 'default' | 'yellow' | 'blue';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        color === 'yellow' ? styles.buttonY : color === 'blue' ? styles.buttonB : styles.buttonD
      }>
      {text}
    </button>
  );
};

export default Button;
