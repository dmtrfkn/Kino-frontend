import { FC, useEffect, useState } from 'react';
import styles from './FavoriteButton.module.scss';
interface FavoriteButtonProps {
  countOfFavorites: number | undefined;
  onClick?: () => void;
  preActive?: boolean;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  countOfFavorites,
  onClick,
  preActive = false,
}) => {
  const [active, setActive] = useState<boolean>(preActive);
  const onClickHandler = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    setActive(preActive);
  }, [preActive]);

  return (
    <div onClick={onClick}>
      <div className={styles.favorite} onClick={onClickHandler}>
        <span className={active ? styles.button + ' ' + styles.active : styles.button}>
          <svg
            className={styles.button__image}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none">
            <g clip-path="url(#clip0_104_19)">
              <path
                d="M22.1816 3.44672C20.9365 2.09629 19.2281 1.35254 17.3706 1.35254C15.9822 1.35254 14.7107 1.79149 13.5913 2.65709C13.0265 3.09402 12.5147 3.62857 12.0634 4.2525C11.6124 3.62876 11.1004 3.09402 10.5353 2.65709C9.41614 1.79149 8.14462 1.35254 6.75621 1.35254C4.89876 1.35254 3.19012 2.09629 1.94503 3.44672C0.7148 4.78136 0.0371094 6.60469 0.0371094 8.58105C0.0371094 10.6152 0.795176 12.4773 2.4227 14.4412C3.87864 16.1979 5.97117 17.9812 8.39438 20.0462C9.22181 20.7514 10.1597 21.5508 11.1336 22.4022C11.3909 22.6276 11.721 22.7516 12.0634 22.7516C12.4057 22.7516 12.736 22.6276 12.9929 22.4026C13.9667 21.5509 14.9052 20.7512 15.733 20.0456C18.1558 17.981 20.2484 16.1979 21.7043 14.441C23.3318 12.4773 24.0897 10.6152 24.0897 8.58087C24.0897 6.60469 23.412 4.78136 22.1816 3.44672Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_104_19">
                <rect
                  width="24.0526"
                  height="24.0526"
                  fill="white"
                  transform="translate(0.0371094 0.0371094)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <p className={styles.favorite__desc}>
          В избранном у {countOfFavorites ? countOfFavorites : 0} человек.
        </p>
      </div>
    </div>
  );
};

export default FavoriteButton;
