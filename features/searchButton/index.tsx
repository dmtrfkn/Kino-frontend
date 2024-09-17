import { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import SearchButton from './ui';
import Modal from '@/shared/ui/Modal';
import Input from '@/shared/ui/Input';
import yellowSearch from '@/assets/yellowSearch.svg';
import filterImage from '@/assets/filter.svg';
import Image from 'next/image';
import Logo from '@/shared/ui/Logo';
import { Person } from '@/entities/Person/model/types/Person';
import { Card } from '@/entities/Card/model/types/card';
import { personSearch } from './api/person';
import { cardSearch } from './api/card';
import Rate from '@/shared/ui/Rate';
import { Rating } from '@/entities/Rating/model/types/rating';
import Link from 'next/link';

const Search = () => {
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [persons, setPersons] = useState<Person[]>();
  const [cards, setCards] = useState<Card[]>();
  const cardImage = (card: Card) => `${process.env.NEXT_PUBLIC_IMAGE_URL}${card.posterImage}`;
  const personImage = (person: Person) =>
    `${process.env.NEXT_PUBLIC_IMAGE_URL}${person.avatarImage}`;
  const calcRate = (ratings: Rating[]) => {
    const ratingsNumbers = ratings.map((i) => Number(i.rate));
    return ratingsNumbers.reduce((acc, curr) => (acc + curr) / 2);
  };

  const getSearch = async () => {
    if (inputValue !== '') {
      const persons = await personSearch(inputValue);
      persons && setPersons(persons);
      const cards = await cardSearch(inputValue);
      cards && setCards(cards);
    } else {
      setPersons(undefined);
      setCards(undefined);
    }
  };

  useEffect(() => {
    if (active) getSearch();
  }, [inputValue]);

  const onClickHandler = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <div className={styles.root}>
        <div onClick={onClickHandler}>
          <SearchButton />
        </div>
        {active && (
          <Modal isOpen={active} setOpen={onClickHandler}>
            <div className={styles.modal}>
              <span className={styles.logo}>
                <Logo />
              </span>
              <div className={styles.input__block}>
                <div className={styles.input}>
                  <Input onChange={setInputValue} placeholder="" />
                </div>
                <div className={styles.images}>
                  <Image
                    src={filterImage}
                    className={styles.image + ' ' + styles.image1}
                    alt="filter"
                  />
                  <Link href={'/search'}>
                    <Image src={yellowSearch} className={styles.image} alt="search" />
                  </Link>
                </div>
              </div>
            </div>
            {cards && (
              <>
                <h1 className={styles.title}>Фильмы</h1>
                {cards.map((card) => (
                  <div className={styles.response__block} key={card._id + Math.random()}>
                    <Link href={'/'} onClick={onClickHandler} className={styles.link}>
                      <div className={styles.response__block__item}>
                        <div className={styles.response__block__item__head}>
                          <Image
                            width={78}
                            height={107}
                            alt="poster"
                            src={cardImage(card)}
                            className={styles.response__block__item__image}
                          />
                          <div className={styles.response__block__item__flex}>
                            <h2 className={styles.response__block__item__flex__title}>
                              {card.name}
                            </h2>
                            <h3 className={styles.response__block__item__flex__title__english}>
                              {card.secondName}
                            </h3>
                            <p className={styles.response__block__item__flex__desc}>
                              {card.genres.map((i, index) =>
                                index !== card.genres.length - 1 ? i + ', ' : i,
                              )}
                            </p>
                          </div>
                        </div>
                        <Rate rate={String(calcRate(card.ratings))} />
                      </div>
                    </Link>
                  </div>
                ))}
              </>
            )}
            {persons && (
              <>
                <h1 className={styles.title}>Персоны</h1>
                {persons.map((person) => (
                  <div className={styles.response__block} key={person._id + Math.random()}>
                    <Link href={'/'} onClick={onClickHandler} className={styles.link}>
                      <div className={styles.response__block__item}>
                        <div className={styles.response__block__item__head}>
                          <Image
                            width={78}
                            height={107}
                            alt="poster"
                            src={personImage(person)}
                            className={styles.response__block__item__image}
                          />
                          <div className={styles.response__block__item__flex}>
                            <h2 className={styles.response__block__item__flex__title}>
                              {person.name}
                            </h2>
                            <h3 className={styles.response__block__item__flex__title__english}>
                              {person.englishName}
                            </h3>
                            <p className={styles.response__block__item__flex__desc}>
                              {person.career.map((i, index) =>
                                index !== person.career.length - 1 ? i + ', ' : i,
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </Modal>
        )}
      </div>
    </>
  );
};

export default Search;
