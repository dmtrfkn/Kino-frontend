import Image from 'next/image';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  color: 'default' | 'yellow' | 'blue';
  onClick?: () => void;
  image?: string;
  type?: 'submit' | 'button' | 'reset';
  form?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick, image, type, form }) => {
  return (
    <button
      form={form}
      type={type ? type : 'submit'}
      onClick={onClick}
      className={
        color === 'yellow' ? styles.buttonY : color === 'blue' ? styles.buttonB : styles.buttonD
      }>
      {image ? (
        <div className={styles.flex}>
          {image ? <Image width={25} height={25} alt="picture" src={image} /> : ''}
          {text}
        </div>
      ) : (
        <div>{text}</div>
      )}
    </button>
  );
};

export default Button;
