import { useEffect, useState } from 'react';
import axios from '@/shared/utils/axios';
import { Card } from '@/entities/Card/model/types/card';
import Image from 'next/image';
import styles from './FilmCard.module.scss';
import { createData } from '@/shared/utils/createData';
import defPoster from '@/assets/EmptyPoster.png';
import arrow from '@/assets/rightArrow.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@/shared/ui/Button';
import FlexTitle from '@/shared/ui/FlexTitle';
import Likes from '@/shared/ui/Likes';
import FilterReviews from '@/features/filterReviews';
import { Review } from '@/entities/Review/models/types/Review';
import ReviewCard from '@/entities/Review';
import ReviewsBlock from './ui/ReviewsBlock';

const FilmCard = () => {
  const [card, setCard] = useState<Card>();
  const [active, setActive] = useState<boolean>(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  const getData = async () => {
    const data: Card = (await axios.get('/cards/64e80bd63a53068d0b5b6eda')).data;
    console.log(data);
    setCard(data);
    setReviews(data.reviews);
  };
  useEffect(() => {
    getData();
  }, []);

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
          <Likes />
          <div className={styles.expected__rating}>
            <span>Рейтинг ожиданий {result}%</span>
            <div className={styles.expected__rating_percent} style={{ width: `${result}%` }}></div>
          </div>
          <div className={styles.favorite}>
            <span className={styles.button}>
              {/* <Image className={styles.button__image} src={favorite} alt="favorite" /> */}
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
            <p className={styles.favorite__desc}>В избранном у {card?.favorites} человек.</p>
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
          // <Trailer videoLink={`${url}${card?.trailers[0]}`} videoName="Побег из Притонии" />
          // <Awards awards={card?.awards ? card.awards : []} />
          // <Posters
          //   links={card?.posters ? card.posters : []}
          //   paragraph={card?.name ? card.name : ''}
          // />
          // <Shots links={card?.shots ? card.shots : []} paragraph={card?.name ? card.name : ''} />
          // <Quotes quotes={card?.quotes ? card.quotes : []} />
          <div className={styles.reviews__block}>
            <FilterReviews
              cardId={card?._id ? card._id : ''}
              reviews={card?.reviews ? card.reviews : []}
              setReviews={setReviews}
            />
            <ReviewsBlock reviews={reviews} />
          </div>
        ) : (
          // <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
          // <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
          <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
        )}
      </div>
    </>
  );
};

export default FilmCard;
