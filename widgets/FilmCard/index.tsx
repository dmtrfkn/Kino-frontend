import { FC, useEffect, useState } from 'react';
import axios from '@/shared/utils/axios';
import { Card } from '@/entities/Card/model/types/card';
import Image from 'next/image';
import styles from './FilmCard.module.scss';
import { createData } from '@/shared/utils/createData';
import defPoster from '@/assets/ПостерБезФото.png';
import Button from '@/shared/ui/Button';
import FlexTitle from '@/shared/ui/FlexTitle';
import Likes from '@/shared/ui/Likes';
import { Review } from '@/entities/Review/models/types/Review';
import CreateReview from '@/features/createReview';
import FavoriteButton from '@/shared/ui/FavoriteButton';
import ReviewsBlock from './ui/ReviewsBlock';
import FilterReviews from '@/features/filterReviews';
import Quotes from '@/widgets/FilmCard/ui/Quotes';
import Shots from '@/shared/ui/Shots';
import Awards from '@/entities/Award/ui/AwardsBlock';
import Trailer from '@/shared/ui/Trailer';
import Posters from '@/widgets/FilmCard/ui/Posters';
import RatingCurcle from '@/shared/ui/RatingCurcle';
import { useAppSelector } from '@/shared/api/redux';
import { selectUser } from '@/entities/User';
import { useDispatch } from 'react-redux';
import {
  updateCardFavorite,
  updateCardLikes,
  updateCardReviews,
  updateUserThere,
} from './api/funcs';

interface FilmCardProps {
  filmId: string;
}

const FilmCard: FC<FilmCardProps> = ({ filmId }) => {
  const [card, setCard] = useState<Card>();
  const user = useAppSelector((state) => selectUser(state));
  const [active, setActive] = useState<boolean>(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [favorites, setFavorites] = useState<number>(card ? card.favorites : 0);
  const [likes, setLikes] = useState<number>(card ? card.userLike : 0);
  const [dislikes, setDisLikes] = useState(card ? card.userDislike : 0);
  const [preFavoriteActive, setPreFavoriteActive] = useState<boolean>(false);
  const [preLikesActive, setPreLikesActive] = useState<boolean>(false);
  const [preDislikesActive, setPreDislikesActive] = useState<boolean>(false);
  const result = 20;
  const hours = card ? Math.floor(card?.duration / 60) : 0;
  const minutes = card ? card.duration - hours * 60 : 0;
  const anotherTime = card?.duration ? `${hours}:${minutes}` : 0;
  const image = `${process.env.NEXT_PUBLIC_IMAGE_URL}${card?.posterImage}`;
  const worldPremiere = createData(card?.premiereInWorld ? card.premiereInWorld : '');
  const russianPremiere = createData(card?.premiereInRussia ? card.premiereInRussia : '');
  const url = process.env.NEXT_PUBLIC_IMAGE_URL;
  const directors = card?.directors.map((i) => i.name);
  const dispatch = useDispatch();

  const getData = async () => {
    const data: Card = (await axios.get(`/cards/${filmId}`)).data;
    setCard(data);
    setReviews(data.reviews);
    setLikes(data.userLike);
    setDisLikes(data.userDislike);
    setFavorites(data.favorites);
    user && setPreLikesActive(user.likedFilms.includes(data._id));
    user && setPreDislikesActive(user.dislikedFilms.includes(data._id));
    user && setPreFavoriteActive(user.favoriteFilms.includes(data._id));
  };

  const setReviewsHandler = (reviews: Review[], newReview: Review) => {
    if (reviews) {
      setReviews(reviews);
      updateCardReviews([newReview], card?._id ? card._id : '', setCard);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onClickLikes = (like: number, dislike: number) => {
    updateCardLikes(like, dislike, card ? card._id : '', setCard);
    if (user && card) {
      updateUserThere(user, card, dispatch, like, dislike);
    }
  };

  const onClickFavorite = (favorite: number) => {
    updateCardFavorite(favorite, card ? card._id : '', setCard);
    if (user && card) {
      updateUserThere(user, card, dispatch, undefined, undefined, favorite ? true : true);
    }
  };

  return (
    <>
      <div className={styles.flex}>
        <div className={styles.flex__wrapper}>
          <Image
            alt="poster"
            className={styles.image}
            src={card ? image : defPoster}
            width={395}
            height={539}
          />
          <div className={styles.desc}>
            {card && <div className={styles.link}>link</div>}
            <h1 className={styles.h1}>{card?.name}</h1>
            <h3>{card?.secondName}</h3>
            <div className={styles.flex__container}>
              {card?.ratings.map((i, index) => (
                <RatingCurcle key={index} rate={i} />
              ))}
            </div>
            <div className={styles.text}>{card?.description}</div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Likes
            onClick={onClickLikes}
            preDislikes={preDislikesActive}
            preLikes={preLikesActive}
            countDislike={dislikes}
            countLike={likes}
            addLike={setLikes}
            addDisLike={setDisLikes}
          />
          <div className={styles.expected__rating}>
            <span>Рейтинг ожиданий {result}%</span>
            <div className={styles.expected__rating_percent} style={{ width: `${result}%` }}></div>
          </div>
          <div className={styles.favorite}>
            <FavoriteButton
              onClick={onClickFavorite}
              preActive={preFavoriteActive}
              setFavorites={setFavorites}
              countOfFavorites={favorites}
            />
          </div>
        </div>
        <div className={styles.information}>
          <div className={styles.information__block_flex}>
            <div className={styles.information__flex + ' ' + styles.information__text}>
              <span>Год:</span>
              <span>Страна:</span>
              <span>Слоган:</span>
              <span>Режисёр:</span>
              <span>Сценарий:</span>
              <span>Продюсер:</span>
              <span>Оператор:</span>
              <span>Композитор:</span>
            </div>
            <div className={styles.information__flex + ' ' + styles.information__yellow__text}>
              <span>{card?.year}</span>
              <span>{card?.country.join(', ')}</span>
              <span>{card?.slogan}</span>
              <span>{directors?.join(', ')}</span>
              <span>{[card?.screenwriters[0], card?.screenwriters[1]].join(', ')}</span>
              <span>{card?.producers.join(', ')}</span>
              <span>{card?.operators.join(', ')}</span>
              <span>{card?.composers.join(', ')}</span>
            </div>
          </div>
          <div className={styles.information__block_flex}>
            <div className={styles.information__flex + ' ' + styles.information__text}>
              <span>Художник:</span>
              <span>Монтаж:</span>
              <span>Жанр:</span>
              <span>Сборы в мире:</span>
              <span>Премьера (мир):</span>
              <span>Премьера (РФ):</span>
              <span>Возраст:</span>
              <span>Время:</span>
            </div>
            <div className={styles.information__flex + ' ' + styles.information__yellow__text}>
              <span>{[card?.artists[0], card?.artists[1]].join(', ')}</span>
              <span>{card?.dubbingStudios}</span>
              <span>{card?.genres.join(', ')}</span>
              <span>${card?.collecting}</span>
              <span>{worldPremiere}</span>
              <span>{russianPremiere}</span>
              <span>{card?.age}+</span>
              <span>
                {card?.duration} минут / {anotherTime}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.producers}>
          {card?.directors.map((i, index) => (
            <div key={i._id} className={styles.director}>
              <Image
                width={150}
                height={150}
                alt="producerImage"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${i.picture}`}
              />
              <div className={styles.director__flex}>
                <span className={styles.director__name}>{i.name}</span>
                <span className={styles.director__secondName}>{i.secondName}</span>
                <span className={styles.director__role}>Режисёр</span>
              </div>
            </div>
          ))}
          <div className={styles.production}>
            <span>Производство:</span>
            <ol className={styles.production__items}>
              {card?.production.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ol>
          </div>
          <div className={styles.production}>
            <span>Спецэффекты:</span>
            <ol className={styles.production__items}>
              {card?.specialEffects.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ol>
          </div>{' '}
          <div className={styles.production}>
            <span>Студия дубляжа:</span>
            <ol className={styles.production__items}>
              {card?.dubbingStudios.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.persons}>
        <FlexTitle header="Все актёры" link="/persons" title="В главных ролях:" />
        <div className={styles.persons__cards}>
          {card?.persons.map((i) => (
            <div key={i._id} className={styles.persons__card}>
              <Image
                className={styles.persons__card__image}
                width={250}
                height={250}
                alt="actorPicture"
                src={`${url}${i.avatarImage}`}
              />
              <div className={styles.persons__card__name}>{i.name}</div>
              <div className={styles.persons__card__secondName}>{i.englishName}</div>
              <div className={styles.persons__card__role}>Актёр</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        {active ? (
          <div>
            <Trailer videoLink={`${url}${card?.trailers[0]}`} videoName="Побег из Притонии" />
            <Awards awards={card?.awards ? card.awards : []} />
            <Posters
              links={card?.posters ? card.posters : []}
              paragraph={card?.name ? card.name : ''}
            />
            <div className={styles.shots}>
              <Shots
                links={card?.shots ? card.shots : []}
                paragraph={card?.name ? card.name : ''}
              />
            </div>
            <div className={styles.quotes}>
              <Quotes quotes={card?.quotes ? card.quotes : []} />
            </div>
            <div className={styles.reviews__block}>
              <FilterReviews
                cardId={card?._id ? card._id : ''}
                reviews={card?.reviews ? card.reviews : []}
                setReviews={setReviews}
              />
            </div>
            <ReviewsBlock reviews={reviews} />
            <CreateReview
              reviews={reviews}
              setReviews={setReviewsHandler}
              user={reviews[0].user[0]}
            />
          </div>
        ) : (
          <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
        )}
      </div>
    </>
  );
};

export default FilmCard;
