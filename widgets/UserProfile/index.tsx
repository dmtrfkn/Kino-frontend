import Button from '@/shared/ui/Button';
import styles from './UserProfile.module.scss';
import settings from '@/assets/settings.svg';
import { useAppSelector } from '@/shared/api/redux';
import { selectUser } from '@/entities/User';
import Image from 'next/image';
import SocialLink from '@/shared/ui/SocialLink';
import vk from '@/assets/vk.svg';
import youtube from '@/assets/youtube.svg';
import instagram from '@/assets/instagram.svg';
import twitter from '@/assets/twitter.svg';
import facebook from '@/assets/facebook.svg';
import CountOfSomething from '@/shared/ui/СountOfSomething';
import Link from 'next/link';

const UserProfileHomePage = () => {
  const user = useAppSelector((state) => selectUser(state));
  const image = `${user?.avatarImage}`;
  const day = user?.birthday ? user?.birthday[0] + user?.birthday[1] : '';
  const mounth = user?.birthday ? user?.birthday[3] + user?.birthday[4] : '';
  const chooseM = (month: string) => {
    switch (mounth) {
      case '01':
        return 'Января';
        break;
      case '02':
        return 'Февраля';
        break;
      case '03':
        return 'Марта';
        break;
      case '04':
        return 'Апреля';
        break;
      case '05':
        return 'Мая';
        break;
      case '06':
        return 'Июнь';
        break;
      case '07':
        return 'Июль';
        break;
      case '08':
        return 'Август';
        break;
      case '09':
        return 'Сентябрь';
        break;
      case '10':
        return 'Октябрь';
        break;
      case '11':
        return 'Ноябрь';
        break;
      case '12':
        return 'Декабрь';
        break;
      default:
        break;
    }
  };
  const calcYear = (year: string) => {
    const numberYear = Number(year);
    return 2023 - numberYear;
  };
  const genres = user?.favoriteGenres.join(', ');
  const year = user?.birthday
    ? user?.birthday[6] + user?.birthday[7] + user?.birthday[8] + user?.birthday[9]
    : '';
  const birthday = `${day} ${chooseM(mounth)} ${year} г. (${calcYear(year)})`;

  return (
    <div className={styles.root}>
      <div className={styles.flex}>
        <h1 className={styles.title}>Ваш профиль</h1>
        <Link href="/settings">
          <Button color="default" text="Настройки" image={settings} />
        </Link>
      </div>
      <div className={styles.block}>
        <Image className={styles.image} alt="" width={478} height={478} src={image} />
        <div className={styles.information}>
          <h1 className={styles.name}>{user?.name}</h1>
          <div className={styles.information_flex}>
            <div className={styles.links}>
              <SocialLink alt="vk" image={vk} link={user?.vk ? user?.vk : ''} />
              <SocialLink alt="youtube" image={youtube} link={user?.youtube ? user?.youtube : ''} />
              <SocialLink
                alt="instagram"
                image={instagram}
                link={user?.instagram ? user?.instagram : ''}
              />
              <SocialLink alt="twitter" image={twitter} link={user?.twitter ? user?.twitter : ''} />
              <SocialLink
                alt="facebook"
                image={facebook}
                link={user?.facebook ? user?.facebook : ''}
              />
            </div>
            <div className={styles.about}>{user?.aboutMe}</div>
            <div className={styles.flex}>
              <ul className={styles.ul}>
                <li className={styles.information_flex__naming__item}>Пол:</li>
                <li className={styles.information_flex__naming__item}>День Рождения:</li>
                <li className={styles.information_flex__naming__item}>Страна:</li>
                <li className={styles.information_flex__naming__item}>Город:</li>
                <li className={styles.information_flex__naming__item}>Любимые жанры:</li>
              </ul>
              <ul className={styles.ul}>
                <li className={styles.information_flex__user__item}>
                  {user?.gender ? user?.gender : 'Нужно указать пол'}
                </li>
                <li className={styles.information_flex__user__item}>
                  {user?.birthday ? birthday : 'Нужно указать пол'}
                </li>
                <li className={styles.information_flex__user__item}>
                  {user?.country ? user?.country : 'Нужно указать страну'}
                </li>
                <li className={styles.information_flex__user__item}>
                  {user?.city ? user?.city : 'Нужно указать город'}
                </li>
                <li className={styles.information_flex__user__item}>
                  {user?.favoriteGenres ? genres : 'Нужно указать любимые жанры'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.benefits}>
        <CountOfSomething count={user ? user?.films.length : 0} text="Фильмы" />
        <CountOfSomething count={user ? user?.friends.length : 0} text="Друзья" />
        <CountOfSomething count={user ? user?.favoriteFilms.length : 0} text="Любимые фильмы" />
        <CountOfSomething count={user ? user?.favoritePersons.length : 0} text="Любимые Актеры" />
        <CountOfSomething count={user ? user?.reviews.length : 0} text="Рецензии" />
        <CountOfSomething count={user ? user?.comments.length : 0} text="Комментарии" />
        <CountOfSomething
          count={user?.expecredFilms ? user.expecredFilms.length : 0}
          text="Ожидаемые фильмы"
        />
      </div>
    </div>
  );
};

export default UserProfileHomePage;
