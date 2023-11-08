import Image from 'next/image';
import styles from './createReview.module.scss';
import { useAppSelector } from '@/shared/api/redux';
import { User } from '@/entities/User';
import { FC, useState } from 'react';
import arrow from '@/assets/arrow.svg';
import Link from 'next/link';
import Button from '@/shared/ui/Button';
import CheckboxInput from '@/shared/ui/CheckboxInput';
import TextArea from '@/shared/ui/TextArea';
import Input from '@/shared/ui/Input';
import { typeOfReview } from './utils/typeOfReview';
import ReactMarkdown from 'react-markdown';
import MDEditor from '@uiw/react-md-editor';
interface CreateReviewProps {
  user: User;
}

const CreateReview: FC<CreateReviewProps> = ({ user }) => {
  const [listState, setListState] = useState<boolean>(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [type, setType] = useState('');
  const [activeArrow, setActiveArrow] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const createReviewHandler = async () => {
    // const newReview =
  };

  const onClickHandler = () => {
    setListState((prev) => !prev);
    setActiveArrow((prev) => !prev);
  };
  // const strin = '**' + textareaValue + '**';
  return (
    <div className={styles.flex}>
      <div className={styles.flex__header}>
        <Image
          width={100}
          height={100}
          alt="userAvatar"
          src={user?.avatarImage ? user.avatarImage : ''}
          className={styles.flex__header__avatar}
        />
        <div className={styles.flex__header__block}>
          <div className={styles.flex__header__block__name}>
            {user.name} {user.secondName}
          </div>
          <Link className={styles.flex__header__block__link} href={`/myProfile`}>
            Мой профиль
          </Link>
        </div>
      </div>
      <div className={styles.flex__block}>
        <div className={styles.flex__block__title}>
          <Input placeholder="Заголовок Вашей рецензии" onChange={setInputValue} />
        </div>
        <div onClick={onClickHandler} className={styles['custom_select']}>
          <div className={styles.flex__block__title__type}>
            {type ? typeOfReview(type) : 'Выберите тип рецензии'}
            <Image
              className={activeArrow ? styles.active__arrow + ' ' + styles.arrow : styles.arrow}
              alt="arrow"
              src={arrow}
            />
          </div>
          <div className={listState ? styles.active : styles.default}>
            <select multiple value={type} className={styles.flex__block__typeOfReview}>
              <option
                onClick={(e) => setType(e.currentTarget.value)}
                className={styles.flex__block__typeOfReview__item}
                selected
                value="good">
                Положительная рецензия
              </option>
              <option
                onClick={(e) => setType(e.currentTarget.value)}
                className={styles.flex__block__typeOfReview__item}
                value="middle">
                Нейтральная рецензия
              </option>
              <option
                onClick={(e) => setType(e.currentTarget.value)}
                className={styles.flex__block__typeOfReview__item}
                value="bad">
                Отрицательная рецензия
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.flex__buttons}>
        <div className={styles.flex__buttons__item__first + ' ' + styles.flex__buttons__item}>
          Ж
        </div>
        <div className={styles.flex__buttons__item__second + ' ' + styles.flex__buttons__item}>
          К
        </div>
        <div className={styles.flex__buttons__item__third + ' ' + styles.flex__buttons__item}>
          А
        </div>
      </div>
      <div className={styles.flex__text}>
        <TextArea
          setSelectedValue={setSelectedValue}
          value={textareaValue}
          setValue={setTextareaValue}
          placeholder="тут писать надо"
        />
        <div className={styles.textArea}>
          {/* <MDEditor
            value={textareaValue}
            onChange={(newValue = '') => setTextareaValue(newValue)}
          /> */}
        </div>
      </div>
      <div className={styles.flex__agree__block}>
        <CheckboxInput text="Я соглашаюсь на" linkText=" правила публицации рецензии" />
        <div className={styles.flex__agree__block__buttons}>
          <Button color="transparent-large" text="Предварительный просмотр" />
          <Button color="yellow-small" text="Отправить" />
        </div>
      </div>
    </div>
  );
};

export default CreateReview;
