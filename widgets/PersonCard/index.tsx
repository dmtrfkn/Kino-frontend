import { Person } from '@/entities/Person/model/types/Person';
import axios from '@/shared/utils/axios';
import { FC, useEffect, useState } from 'react';
import styles from './PersonCard.module.scss';
import Image from 'next/image';
import { createData } from '@/shared/utils/createData';
import FavoriteButton from '@/shared/ui/FavoriteButton';
import Awards from '@/entities/Award/ui/AwardsBlock';
import Poster from '@/shared/ui/PosterOfFilm';
import Shots from '@/shared/ui/Shots';
import FlexTitle from '@/shared/ui/FlexTitle';
import { selectUser } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/shared/api/redux';
import Comment from '@/entities/Comment';
import CreateComment from '@/features/createComment';
import ShortFilmCardWithRate from '@/shared/ui/ShortCardWithRate';
import { updatePersonHandler } from './api/update';
import { setUser } from '@/entities/User';
import { updateUser } from '../UpdateUserSettings/api/update';

interface PersonCardProps {
  personId: string;
}

const PersonCard: FC<PersonCardProps> = ({ personId }) => {
  const user = useAppSelector((state) => selectUser(state));
  const [person, setPerson] = useState<Person | undefined>();
  const [avatar, setAvatar] = useState<string>('');
  const [favorites, setFavorites] = useState(0);
  const [activeFavoriteButton, setActiveFavoriteButton] = useState(true);
  const [preActive, setPreActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getData = async () => {
    const data: Person = (await axios.get(`/persons/${personId}`)).data;
    console.log(data);
    setPerson(data);
    user && setPreActive(user.persons.includes(data._id));
    setFavorites(data.favorites);
    setAvatar(`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.avatarImage}`);
    // console.log(user?.persons);
    // console.log(data._id);
  };
  useEffect(() => {
    getData();
  }, []);

  const onChangePerson = (person: Person) => {
    setPerson(person);
  };

  const onUpdatePerson = async () => {
    setActiveFavoriteButton((prev) => !prev);
    // console.log(activeFavoriteButton);
    // console.log(preActive);
    // console.log(user?.persons);
    // console.log(person?._id);
    // setFavorites((activeFavoriteButton === preActive) === true ? favorites - 1 : favorites + 1);
    const updatedPerson = await updatePersonHandler(person?._id ? person._id : '', {
      comments: [],
      favorites: (activeFavoriteButton === preActive) === true ? -1 : +1,
    });
    setPerson(updatedPerson);
    setPreActive((prev) => !prev);
    console.log(user?.avatarImage);
    if (user && person) {
      const updatedUser = await updateUser({
        person: person._id,
        aboutMe: user.aboutMe,
        avatarImage: user.avatarImage,
        birthday: user.birthday,
        city: user.city,
        country: user.country,
        email: user.email,
        facebook: user.facebook,
        favoriteGenres: user.favoriteGenres,
        friends: user.friends,
        gender: user.gender,
        instagram: user.instagram,
        name: user.name,
        secondName: user.secondName,
        twitter: user.twitter,
        vk: user.vk,
        youtube: user.youtube,
        dislikedFilm: '',
        favoriteFilm: '',
        likedFilm: '',
      });
      dispatch(setUser(updatedUser));
    }
  };

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
              <a className={styles.avatar__block__flex__header__link} href="#!">
                link
              </a>
              <h1 className={styles.avatar__block__flex__header__name}>{person?.name}</h1>
              <p className={styles.avatar__block__flex__header__name__eng}>{person?.englishName}</p>
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
              <FavoriteButton
                setFavorites={setFavorites}
                preActive={preActive}
                onClick={onUpdatePerson}
                countOfFavorites={favorites}
              />
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
            (i, index) =>
              index <= 3 && (
                <Poster height={520} poster={i} width={340} key={i._id + String(Math.random())} />
              ),
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
      <div className={styles.films__block}>
        <FlexTitle title="Фильмы" header="" link="/films" />
        {person?.films.map((film) => (
          <ShortFilmCardWithRate film={film} key={film._id + Math.random()} />
        ))}
      </div>

      <div className={styles.comments}>
        <CreateComment
          entityId={person?._id ? person._id : ''}
          setEntity={onChangePerson}
          type="persons"
          user={user}
        />
        <div className={styles.comments__block}>
          {person?.comments.map((i, index) => (
            <Comment currentComment={i} key={i._id + Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
