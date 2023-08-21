import Image from 'next/image';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  color:
    | 'default-small'
    | 'default-big'
    | 'yellow'
    | 'blue-middle'
    | 'blue-big'
    | 'blue__and__light'
    | 'transparent-small'
    | 'transparent-large'
    | 'transparent-big'
    | 'white';
  onClick?: () => void;
  image?: string;
  type?: 'submit' | 'button' | 'reset';
  form?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, image, type, form, color }) => {
  return (
    <button
      form={form}
      type={type}
      onClick={onClick}
      className={styles[`bg-${color}`] + ' ' + styles.button}>
      {image ? (
        <div className={styles.flex}>
          {image ? <Image width={20} height={20} alt="button_image" src={image} /> : ''}
          {text}
        </div>
      ) : (
        <div>{text}</div>
      )}
    </button>
  );
};

export default Button;
