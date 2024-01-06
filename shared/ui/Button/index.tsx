import Image from 'next/image';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  color:
    | 'default-small'
    | 'default-big'
    | 'yellow-small'
    | 'yellow-middle'
    | 'yellow-big'
    | 'blue-middle'
    | 'blue-big'
    | 'blue__and__light'
    | 'blue__and__light__middle'
    | 'transparent-small'
    | 'transparent-large'
    | 'transparent-big'
    | 'white'
    | 'non-active';
  onClick?: () => void;
  image?: string;
  type?: 'submit' | 'button' | 'reset';
  form?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, image, type, form, color, disabled }) => {
  return (
    <button
      disabled={disabled && disabled}
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
