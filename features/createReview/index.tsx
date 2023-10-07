import Image from 'next/image';
import styles from './createReview.module.scss';
import { useAppSelector } from '@/shared/api/redux';
import { User } from '@/entities/User';
import { FC } from 'react';
import Link from 'next/link';

interface CreateReviewProps {
  user: User;
}

const CreateReview: FC<CreateReviewProps> = ({ user }) => {
  const createReviewHandler = async () => {
    // const newReview =
  };
  return (
    <div className={styles.flex}>
      <div className={styles.flex__header}>
        <Image
          alt="userAvatar"
          src={user?.avatarImage ? user.avatarImage : ''}
          className={styles.flex__header__avatar}
        />
        <div className={styles.flex__header__block}>
          <div className={styles.flex__header__block__name}>
            {user.name} {user.secondName}
          </div>
          <Link className={styles.flex__header__block__link} href={`/myProfile`}>
            Мой профиль
          </Link>
        </div>
      </div>
      <div className={styles.flex__block}>
        <div className={styles.flex__block__title} placeholder="Заголовок Вашей рецензии"></div>
        <section className={styles.flex__block__typeOfReview}>
          <option
            className={styles.flex__block__typeOfReview__item}
            selected
            value="Положительная"
          />
          <option className={styles.flex__block__typeOfReview__item} value="Нейтральная" />
          <option className={styles.flex__block__typeOfReview__item} value="Отрицательная" />
        </section>
      </div>
      <div className={styles.flex__buttons}>
        <div className={styles.flex__buttons__item__first}>Ж</div>
        <div className={styles.flex__buttons__item__second}>К</div>
        <div className={styles.flex__buttons__item__trird}>А</div>
      </div>
      <div className={styles.flex__text}></div>
      <div className={styles.flex__agree__block}>
        {/* like link */}
        {/* like but */}
        {/* like but */}
      </div>
    </div>
  );
};

export default CreateReview;
