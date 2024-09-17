import { User } from '@/entities/User';
import Button from '@/shared/ui/Button';
import TextArea from '@/shared/ui/TextArea';
import { createCommentDto } from '@/features/createComment/createCommets';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import axios from '@/shared/utils/axios';
import { Person } from '@/entities/Person/model/types/Person';
import styles from './createComment.module.scss';
import { Comment } from '@/entities/Comment/types/comment';
interface createCommentProps {
  user: User | undefined;
  type: string;
  entityId: string;
  setEntity(entity: { _id: string }): void;
}

const CreateComment: FC<createCommentProps> = ({ user, entityId, type, setEntity }) => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const createCommentFunc = async (data: createCommentDto) => {
    try {
      const comment: Comment = (
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/comments/create`, data)
      ).data;
      // console.log(comment);
      // const comments = comment
      //   ? person?.comments
      //     ? [...person.comments, comment]
      //     : []
      //   : person?.comments
      //   ? [...person.comments]
      //   : [];
      const newEntity = (
        await axios.put(`${process.env.NEXT_PUBLIC_URL}/${type}/update/${entityId}`, {
          comments: [comment._id],
        })
      ).data;
      // console.log(newEntity);
      setEntity(newEntity);
      setTextAreaValue('');
      // console.log(`${process.env.NEXT_PUBLIC_URL}/persons/update/${person?._id}`);
      // console.log(person?._id);
    } catch (error) {
      console.warn('Ошибочка при создании коммента на фронте', error);
    }
  };

  const onClickCreateCommentHandler = async () => {
    createCommentFunc({
      user: user?._id ? user._id : '',
      likes: 0,
      dislikes: 0,
      date: Date.now(),
      text: textAreaValue,
      comments: [],
      complaints: [],
    });
    // console.log(person);
  };

  return (
    <div>
      <div className={styles.comments__create}>
        <div className={styles.comments__create__header}>
          <Image
            src={`${user && user.avatarImage}`}
            className={styles.comments__create__header__image}
            width={115}
            height={115}
            alt="userAvatar"
          />
          <div>
            <h2 className={styles.comments__create__header__title}>
              {user && user.name} {user && user.secondName}
            </h2>
            <Link href={'/myProfile'} className={styles.comments__create__header__link}>
              Мой профиль
            </Link>
          </div>
        </div>
        <div className={styles.comments__create__flex}>
          <TextArea
            setValue={setTextAreaValue}
            value={textAreaValue}
            setSelectedValue={() => console.log()}
            placeholder="Оставьте свой комментарий"
          />
          <Button
            onClick={onClickCreateCommentHandler}
            color="yellow-middle"
            text="Отправить комментарий"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
