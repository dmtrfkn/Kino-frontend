import { FC, SelectHTMLAttributes, useEffect, useState } from 'react';
import styles from './ChooseGenges.module.scss';
interface ChooseGengesProps {
  setGenres: (genres: string[]) => void;
  arrayOfChoosenGenres: string[];
}

const ChooseGenges: FC<ChooseGengesProps> = ({ setGenres, arrayOfChoosenGenres }) => {
  const [state, setState] = useState(false);
  const onChooseGenre = (genre: string) => {
    if (arrayOfChoosenGenres.includes(genre)) {
      const newGenres = arrayOfChoosenGenres.filter((i) => i !== genre);
      setGenres(newGenres);
    } else {
      const newGenres = [...arrayOfChoosenGenres, genre];
      setGenres(newGenres);
    }
  };

  const onClickHandler = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      <div onClick={onClickHandler} className={styles['custom_select']}>
        {arrayOfChoosenGenres.length > 0 ? arrayOfChoosenGenres.join(', ') : 'Выберите жанры'}
      </div>
      <div className={state ? styles.active : styles.default}>
        <select name="genres" className={styles.select} multiple>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Аниме">
            Аниме
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Биографический">
            Биографический
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Боевик">
            Боевик
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Вестерн">
            Вестерн
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Военный">
            Военный
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Детектив">
            Детектив
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Детский">
            Детский
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Документальный">
            Документальный
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Драма">
            Драма
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Исторический">
            Исторический
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Кинокомикс">
            Кинокомикс
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Комедия">
            Комедия
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Концерт">
            Концерт
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Короткометражный">
            Короткометражный
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Криминал">
            Криминал
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Мелодрама">
            Мелодрама
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Мистика">
            Мистика
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Музыка">
            Музыка
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Мультфильм">
            Мультфильм
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Мюзикл">
            Мюзикл
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Научный">
            Научный
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Нуар">
            Нуар
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Приключения">
            Приключения
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Реалити-шоу">
            Реалити-шоу
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Семейный">
            Семейный
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Спорт">
            Спорт
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Ток-шоу">
            Ток-шоу
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Триллер">
            Триллер
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Ужасы">
            Ужасы
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Фантастика">
            Фантастика
          </option>
          <option
            className={styles.select__item}
            onClick={(e) => onChooseGenre(e.currentTarget.value)}
            value="Фэнтези">
            Фэнтези
          </option>
        </select>
      </div>
    </>
  );
};

export default ChooseGenges;
