import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <ul className={styles.block}>
      <li>
        <a className={styles.link} href="#!">
          Афиша
        </a>
      </li>
      <li>
        <a className={styles.link} href="#!">
          Медиа
        </a>
      </li>
      <li>
        <a className={styles.link} href="#!">
          Фильмы
        </a>
      </li>
      <li>
        <a className={styles.link} href="#!">
          Актёры
        </a>
      </li>
      <li>
        <a className={styles.link} href="#!">
          Новости
        </a>
      </li>
      <li>
        <a className={styles.link} href="#!">
          Подборки
        </a>
      </li>
      <li>
        <a className={styles.link} href="#!">
          Категории
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
