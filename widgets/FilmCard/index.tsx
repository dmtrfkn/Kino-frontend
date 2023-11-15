import { useEffect, useState } from 'react';
import axios from '@/shared/utils/axios';
import { Card } from '@/entities/Card/model/types/card';
import Image from 'next/image';
import styles from './FilmCard.module.scss';
import { createData } from '@/shared/utils/createData';
import defPoster from '@/assets/EmptyPoster.png';
import Button from '@/shared/ui/Button';
import FlexTitle from '@/shared/ui/FlexTitle';
import Likes from '@/shared/ui/Likes';
import { Review } from '@/entities/Review/models/types/Review';
import CreateReview from '@/features/createReview';
import FavoriteButton from '@/shared/ui/FavoriteButton';
import ReviewsBlock from './ui/ReviewsBlock';
import { updateCard } from './api/update';
import FilterReviews from '@/features/filterReviews';
import Quotes from '@/shared/ui/Quotes';
import Shots from '@/shared/ui/Shots';
import Awards from '@/shared/ui/Awards';
import Trailer from '@/shared/ui/Trailer';

const FilmCard = () => {
  const [card, setCard] = useState<Card>();
  const [active, setActive] = useState<boolean>(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [likes, setLikes] = useState(card?.userLike ? card.userLike : 0);
  const [dislikes, setDisLikes] = useState(card?.userDislike ? card.userDislike : 0);

  const getData = async () => {
    const data: Card = (await axios.get('/cards/64e80bd63a53068d0b5b6eda')).data;
    console.log(data);
    setCard(data);
    setReviews(data.reviews);
  };

  const updateCardThere = async (newReview: Review[]) => {
    const updatedCard = await updateCard(
      {
        dislikes: dislikes,
        favorites: card ? card.favorites : 0,
        likes: likes,
        reviews: newReview.map((i) => i._id),
      },
      card ? card._id : '',
    );
    setCard(updatedCard);
  };

  const setReviewsHandler = (reviews: Review[], newReview: Review) => {
    if (reviews) {
      setReviews(reviews);
      updateCardThere([newReview]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   updateCardThere([]);
  // }, [likes, dislikes]);

  const result = 20;
  const hours = card ? Math.floor(card?.duration / 60) : 0;
  const minutes = card ? card.duration - hours * 60 : 0;
  const anotherTime = card?.duration ? `${hours}:${minutes}` : 0;
  const image = `${process.env.NEXT_PUBLIC_IMAGE_URL}${card?.posterImage}`;
  const worldPremiere = createData(card?.premiereInWorld ? card.premiereInWorld : '');
  const russianPremiere = createData(card?.premiereInRussia ? card.premiereInRussia : '');
  const url = process.env.NEXT_PUBLIC_IMAGE_URL;
  const directors = card?.directors.map((i) => i.name);
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
            <div className={styles.link}>link</div>
            <h1 className={styles.h1}>{card?.name}</h1>
            <h3>{card?.secondName}</h3>
            <div className={styles.flex__container}>
              {card?.ratings.map((i, index) => (
                <div className={styles.wrapper} key={index}>
                  <div className={styles.circle}>
                    <div
                      className={
                        styles[`p-${Math.floor(Number(i.rate))}`] + ' ' + styles.circle__item
                      }>
                      <div
                        className={
                          styles[`pp-${Math.floor(Number(i.rate))}`] +
                          ' ' +
                          styles.circle__item_inner
                        }>
                        {i.rate}
                      </div>
                    </div>
                  </div>
                  {i.whoose}
                </div>
              ))}
            </div>
            <div className={styles.text}>{card?.description}</div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Likes
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
            <FavoriteButton countOfFavorites={card?.favorites} />
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
              <span>Опертор:</span>
              <span>Композитор:</span>
            </div>
            <div className={styles.information__flex + ' ' + styles.information__yellow__text}>
              <span>{card?.year}</span>
              <span>{card?.country}</span>
              <span>{card?.slogan}</span>
              <span>{directors?.join(', ')}</span>
              <span>{card?.screenwriters.join(', ')}</span>
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
              <span>{card?.artists.join(', ')}</span>
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
            {/* <Trailer videoLink={`${url}${card?.trailers[0]}`} videoName="Побег из Притонии" /> */}
            <Awards awards={card?.awards ? card.awards : []} />

            <Shots links={card?.shots ? card.shots : []} paragraph={card?.name ? card.name : ''} />
            <Quotes quotes={card?.quotes ? card.quotes : []} />
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
          // </div>
          // <Posters
          //   links={card?.posters ? card.posters : []}
          //   paragraph={card?.name ? card.name : ''}
          // />
          // <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
          // <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
          <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
        )}
      </div>
    </>
  );
};

export default FilmCard;
