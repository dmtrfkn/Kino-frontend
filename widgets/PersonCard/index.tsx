import { Person } from '@/entities/Person/model/types/Person';
import axios from '@/shared/utils/axios';
import { useEffect, useState } from 'react';
import styles from './PersonCard.module.scss';
import Image from 'next/image';
import { createData } from '@/shared/utils/createData';
import FavoriteButton from '@/shared/ui/FavoriteButton';
import Awards from '@/shared/ui/Awards';
import Poster from '@/shared/ui/Poster';
import Shots from '@/shared/ui/Shots';
import FlexTitle from '@/shared/ui/FlexTitle';
import Button from '@/shared/ui/Button';
import { selectUser } from '@/entities/User';
import { useAppSelector } from '@/shared/api/redux';
import Comment from '@/entities/Comment';
import CreateComment from '@/features/createComment';

const PersonCard = () => {
  //6529000c145a8c0e1352af45
  const user = useAppSelector((state) => selectUser(state));
  const [person, setPerson] = useState<Person | undefined>();
  const [avatar, setAvatar] = useState<string>('');
  const getData = async () => {
    const data: Person = (await axios.get('/persons/652e7197051d9d2bc03b025e')).data;
    console.log(data);
    setPerson(data);
    setAvatar(`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.avatarImage}`);
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log(person?.films[0].ratings[0].rate);

  return (
    <div className={styles.root}>
      <div className={styles.avatar__wrapper}>
        <div className={styles.avatar__block}>
          <Image
            className={styles.avatar__block__image}
            alt="avatar"
            src={avatar}
            width={395}
            height={539}
          />
          <div className={styles.avatar__block__flex}>
            <div className={styles.avatar__block__flex__header}>
              <a href="#!">link</a>
              <h1>{person?.name}</h1>
              <p>{person?.englishName}</p>
            </div>
            <div>
              <div className={styles.avatar__block__flex__information}>
                <ul className={styles.avatar__block__flex__information__names}>
                  <li className={styles.avatar__block__flex__information__names__item}>
                    Информация
                  </li>
                  <li className={styles.avatar__block__flex__information__names__item}>Карьера</li>
                  <li className={styles.avatar__block__flex__information__names__item}>Рост</li>
                  <li className={styles.avatar__block__flex__information__names__item}>
                    Дата рождения
                  </li>
                  <li className={styles.avatar__block__flex__information__names__item}>
                    Место рождения
                  </li>
                  <li className={styles.avatar__block__flex__information__names__item}>Жанры</li>
                  <li className={styles.avatar__block__flex__information__names__item}>
                    Всего фильмов
                  </li>
                </ul>
                <ul className={styles.avatar__block__flex__information__values}>
                  <li className={styles.avatar__block__flex__information__values__item}>
                    <a
                      className={styles.avatar__block__flex__information__values__item__link}
                      href={person?.linkToBiography}>
                      Биография
                    </a>
                  </li>
                  <li className={styles.avatar__block__flex__information__values__item}>
                    {person?.career.map((i) => i + ', ')}
                  </li>
                  <li className={styles.avatar__block__flex__information__values__item}>
                    {person?.height}
                  </li>
                  <li className={styles.avatar__block__flex__information__values__item}>
                    {createData(person?.birthday[0] || '')}
                  </li>
                  <li className={styles.avatar__block__flex__information__values__item}>
                    {person?.bornPlace}
                  </li>
                  <li className={styles.avatar__block__flex__information__values__item}>
                    {person?.genres.map((i) => i + ', ')}
                  </li>
                  <li className={styles.avatar__block__flex__information__values__item}>
                    {person?.totalCountOfFilmsAndYears[0]} , {person?.totalCountOfFilmsAndYears[1]}
                  </li>
                </ul>
              </div>
              <FavoriteButton countOfFavorites={person?.favorites} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.awards__block}>
        <Awards awards={person?.awards} />
      </div>
      <div className={styles.best__films__flex}>
        <FlexTitle title="Лучшие фильмы" link="все фильмы" header="Все фильмы" />
        <div className={styles.best__films__flex__block}>
          {person?.bestFilms.map(
            (i, index) => index <= 3 && <Poster height={520} poster={i} width={340} key={i._id} />,
          )}
        </div>
      </div>

      <div className={styles.last_news__block}>
        <h1>ТУТ БУДУТ НОВОСТИ</h1>
      </div>
      <div className={styles.photos__block}>
        <Shots
          person={true}
          links={person?.photos}
          paragraph="Леонардо Ди Каприо"
          header="Все фото"
          title="Фото"
        />
      </div>
      {/* <div className={styles.rate}></div> */}
      <div className={styles.films__block}>
        <h1>Фильмы</h1>
        {person?.films.map((film) => (
          <div className={styles.films__block__flex} key={film._id}>
            <div className={styles.films__block__flex__first}>
              <Image
                className={styles.films__block__flex__first__image}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${film.posterImage}`}
                width={200}
                height={275}
                alt="Poster"
              />
              <div className={styles.films__block__flex__first__description}>
                <h2 className={styles.films__block__flex__first__description__header}>
                  {film.name}
                </h2>
                <h2 className={styles.films__block__flex__first__description__header_english}>
                  {film.secondName}
                </h2>
                <div className={styles.films__block__flex__first__description__genres}>
                  {film.genres &&
                    film.genres.map((i) =>
                      i !== film.genres[film.genres.length - 1] ? i + ', ' : i,
                    )}
                </div>
                <p className={styles.films__block__flex__first__description__author}>
                  {film.producers &&
                    film.producers.map((i) =>
                      i !== film.producers[film.producers.length - 1] ? i + ', ' : i,
                    )}
                </p>
              </div>
            </div>
            <div className={styles.films__block__flex__second}>
              <div className={styles.films__block__flex__second__rate}>
                {film.ratings &&
                  film.ratings.map((rate, index) => (
                    <div key={index} className={styles.films__block__flex__second__rate__flex}>
                      <span
                        className={
                          styles.films__block__flex__second__rate__item +
                          ' ' +
                          styles[`p-${Math.floor(Number(rate.rate))}`]
                        }>
                        {rate.rate}
                      </span>
                      <p>{rate.whoose}</p>
                    </div>
                  ))}
              </div>
              <Button color="blue__and__light__middle" text="Карточка фильма" type="button" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.comments}>
        <CreateComment person={person} setPerson={setPerson} user={user} />
        <div className={styles.comments__block}>
          {person?.comments.map((i, index) => (
            <Comment currentComment={i} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
