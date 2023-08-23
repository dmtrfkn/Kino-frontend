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
import Trailer from '@/shared/ui/Trailer';
import Awards from '@/shared/ui/Awards';
import FlexTitle from '@/shared/ui/FlexTitle';
import Posters from '@/shared/ui/Posters';
import Shots from '@/shared/ui/Shots';
import Quotes from '@/shared/ui/Quotes';

const FilmCard = () => {
  useEffect(() => {
    getData();
  }, []);
  const [card, setCard] = useState<Card>();
  const [active, setActive] = useState<boolean>(false);
  const getData = async () => {
    const data = (await axios.get('/cards/64e45841252bed4513e8523e')).data;
    console.log(data);
    setCard(data);
  };

  const router = useRouter(); // чекань как ммылка
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
          <div className={styles.likes}>
            <span className={styles.button + ' ' + styles.like}>
              {/* <Image src={like} alt="like" /> */}
              <svg
                className={styles.button__image__like}
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none">
                <g clip-path="url(#clip0_1_1045)">
                  <path
                    d="M6.239 12.2622H3.18609C2.76461 12.2622 2.42285 12.6039 2.42285 13.0254V25.2369C2.42285 25.6584 2.76456 26.0001 3.18609 26.0001H6.23895C6.66044 26.0001 7.00219 25.6584 7.00219 25.2369V13.0254C7.00219 12.6039 6.66054 12.2622 6.239 12.2622Z"
                    fill="white"
                  />
                  <path
                    d="M25.3039 14.2852C25.1693 13.1012 24.0633 12.2621 22.8718 12.2621H16.9215C17.4272 11.3566 17.6986 8.79556 17.6865 7.74937C17.6666 6.01763 16.2325 4.62988 14.5007 4.62988H13.8709C13.4491 4.62988 13.1077 4.97123 13.1077 5.39312C13.1077 7.15802 12.4204 10.3436 11.1244 11.6398C10.252 12.5121 9.50621 12.8282 8.52832 13.317V24.769C10.0255 25.2681 11.9264 26.0001 14.8239 26.0001H19.8165C21.4615 26.0001 22.7427 24.4765 22.1053 22.8667C23.0765 22.6021 23.7927 21.7114 23.7927 20.6575C23.7927 20.3601 23.7353 20.0754 23.6317 19.8138C25.2683 19.3679 25.8707 17.3471 24.7348 16.0782C25.1521 15.612 25.3823 14.9743 25.3039 14.2852Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1045">
                    <rect width="26" height="26" fill="white" transform="translate(0.871094)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className={styles.button + ' ' + styles.dislike}>
              {/* <Image src={dislike} alt="dislike" /> */}
              <svg
                className={styles.button__image}
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none">
                <g clip-path="url(#clip0_1_1036)">
                  <path
                    d="M20.6321 14.6089L23.685 14.6089C24.1065 14.6089 24.4482 14.2672 24.4482 13.8456L24.4482 1.6342C24.4482 1.21272 24.1065 0.87096 23.685 0.87096L20.6321 0.87096C20.2107 0.87096 19.8689 1.21267 19.8689 1.6342L19.8689 13.8457C19.8689 14.2672 20.2106 14.6089 20.6321 14.6089Z"
                    fill="white"
                  />
                  <path
                    d="M1.56717 12.5859C1.70179 13.7698 2.80775 14.609 3.99933 14.609L9.94961 14.609C9.44394 15.5145 9.17251 18.0755 9.18454 19.1217C9.2045 20.8535 10.6386 22.2412 12.3704 22.2412L13.0002 22.2412C13.422 22.2412 13.7634 21.8999 13.7634 21.478C13.7634 19.7131 14.4507 16.5275 15.7467 15.2313C16.6191 14.359 17.3649 14.0428 18.3428 13.5541L18.3428 2.10206C16.8456 1.60304 14.9447 0.871029 12.0472 0.871028L7.05463 0.871028C5.40958 0.871028 4.12837 2.39461 4.76582 4.00438C3.79463 4.26895 3.07842 5.15965 3.07842 6.21356C3.07842 6.51098 3.1358 6.79566 3.23939 7.05729C1.60277 7.5032 1.00035 9.52403 2.13627 10.7929C1.71896 11.2591 1.48881 11.8968 1.56717 12.5859Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1036">
                    <rect
                      width="26"
                      height="26"
                      fill="white"
                      transform="translate(26 26.8711) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
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
          <Quotes quotes={card?.quotes ? card.quotes : []} />
        ) : (
          // <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
          <Button color="yellow-big" text="pop" onClick={() => setActive((prev) => !prev)} />
        )}
      </div>
    </>
  );
};

export default FilmCard;
