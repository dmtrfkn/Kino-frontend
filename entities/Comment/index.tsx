import Likes from '@/shared/ui/Likes';
import styles from './Comment.module.scss';
import Image from 'next/image';
import { Comment } from './types/comment';
import { FC, useEffect, useState } from 'react';
import TextArea from '@/shared/ui/TextArea';
import Button from '@/shared/ui/Button';
import { updateComment } from './api/update';
import axios from '@/shared/utils/axios';
import { useAppSelector } from '@/shared/api/redux';
import { createDateFromString } from '@/shared/utils/createDateFromString';
interface CommentProps {
  currentComment: Comment;
}

const Comment: FC<CommentProps> = ({ currentComment }) => {
  const [comment, setComment] = useState<Comment>(currentComment);

  const { data: userData } = useAppSelector((state) => state.user);
  const [addCommToComm, setAddCommToComm] = useState(false);
  const [textareaValue, setTextAreaValue] = useState('');
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDisLikes] = useState(comment.dislikes);
  const onClickAddCommentToCommentHandler = () => {
    setAddCommToComm((prev) => !prev);
  };

  useEffect(() => {
    onClickUpdateCommentHandler();
  }, [likes, dislikes]);

  const onClickUpdateCommentHandler = async (flag?: boolean) => {
    const createdComment: Comment = flag
      ? await (
          await axios.post(`${process.env.NEXT_PUBLIC_URL}/comments/create`, {
            user: userData?._id ? userData._id : '',
            likes: 0,
            dislikes: 0,
            text: textareaValue,
            date: Date.now(),
            comments: [],
            complains: [],
          })
        ).data
      : '';
    const updatedComment = await updateComment(
      {
        comments: createdComment ? [createdComment._id] : [],
        dislikes: dislikes,
        likes: likes,
        text: textareaValue,
      },
      comment._id,
    );
    updatedComment && setComment(updatedComment);
    flag && setAddCommToComm((prev) => !prev);
  };
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.comment__flex}>
          <div className={styles.comment__flex__header}>
            <Image
              className={styles.comment__flex__header__image}
              alt="avatarPic"
              src={comment.user[0].avatarImage ? comment.user[0].avatarImage : ''}
              width={115}
              height={115}
            />
            <div className={styles.comment__flex__header__description}>
              <div className={styles.comment__flex__header__description__head}>
                <h2 className={styles.comment__flex__header__description__head__title}>
                  {comment.user[0].name}
                </h2>
                <span className={styles.comment__flex__header__description__head__date}>
                  {createDateFromString(comment.date)}
                </span>
              </div>
              <p className={styles.comment__flex__header__description__text}>{comment.text}</p>
            </div>
          </div>
          <Likes
            countDislike={dislikes}
            countLike={likes}
            addLike={setLikes}
            addDisLike={setDisLikes}
          />
        </div>
        <div className={styles.comment__flex}>
          <span className={styles.comment__flex__comm} onClick={onClickAddCommentToCommentHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <g clip-path="url(#clip0_8_875)">
                <path
                  d="M2.32892 15.0441H1.19521L1.99688 14.2424C2.42913 13.8102 2.69906 13.248 2.77163 12.6381C1.64367 11.8979 0.818867 10.924 0.377348 9.80716C-0.0638584 8.69117 -0.119303 7.46266 0.217026 6.25441C0.62057 4.80462 1.56707 3.4832 2.88211 2.53351C4.31113 1.50154 6.09011 0.956055 8.02674 0.956055C10.4664 0.956055 12.5227 1.65698 13.9734 2.98301C15.2803 4.17764 16 5.78903 16 7.52039C16 8.36154 15.8287 9.17999 15.491 9.95302C15.1414 10.7529 14.6296 11.4652 13.9697 12.0699C12.5171 13.4012 10.462 14.1049 8.02671 14.1049C7.12267 14.1049 6.1793 13.9842 5.33706 13.7627C4.53983 14.5806 3.45953 15.0441 2.32892 15.0441ZM8.02674 1.89526C4.14349 1.89526 1.7607 4.21111 1.12182 6.50627C0.518103 8.6752 1.40806 10.7246 3.50248 11.9886L3.7365 12.1298L3.7293 12.403C3.71502 12.9438 3.5861 13.4647 3.35534 13.9355C3.91726 13.7454 4.42716 13.4007 4.82644 12.929L5.02499 12.6944L5.31943 12.7825C6.14571 13.0296 7.10717 13.1657 8.02674 13.1657C12.8596 13.1657 15.0608 10.2393 15.0608 7.52039C15.0608 6.05599 14.4496 4.69076 13.3397 3.67623C12.0651 2.51112 10.2279 1.89526 8.02674 1.89526Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_875">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Комментировать</span>
          </span>
          <span className={styles.comment__flex__complain}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <g clip-path="url(#clip0_8_889)">
                <path
                  d="M15.7449 12.3555L9.62933 1.76295C9.28927 1.17395 8.68018 0.822266 7.99999 0.822266C7.31984 0.822266 6.71071 1.17395 6.37065 1.76295L0.25507 12.3555C-0.0850233 12.9445 -0.0850233 13.6478 0.25507 14.2369C0.595163 14.8259 1.20422 15.1775 1.88441 15.1775H14.1156C14.7957 15.1775 15.4048 14.8259 15.7449 14.2369C16.085 13.6478 16.085 12.9445 15.7449 12.3555ZM14.9331 13.7682C14.7625 14.0638 14.4569 14.2402 14.1156 14.2402H1.88441C1.5431 14.2402 1.23747 14.0638 1.06685 13.7682C0.896225 13.4726 0.896225 13.1198 1.06685 12.8242L7.18249 2.23167C7.35312 1.93611 7.65874 1.75967 8.00002 1.75967C8.34127 1.75967 8.64693 1.93611 8.81755 2.23167L14.9332 12.8242C15.1038 13.1198 15.1038 13.4726 14.9331 13.7682Z"
                  fill="#FF9E9E"
                />
                <path d="M8.46862 5.50049H7.53125V10.1874H8.46862V5.50049Z" fill="#FF9E9E" />
                <path
                  d="M7.99994 11.1243C7.65535 11.1243 7.375 11.4046 7.375 11.7492C7.375 12.0938 7.65535 12.3741 7.99994 12.3741C8.34451 12.3741 8.62489 12.0938 8.62489 11.7492C8.62489 11.4046 8.34454 11.1243 7.99994 11.1243Z"
                  fill="#FF9E9E"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_889">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Пожаловться на комментарий</span>
          </span>
        </div>
      </div>
      {addCommToComm && (
        <div className={styles.comment__add_comment}>
          <TextArea
            value={textareaValue}
            setValue={setTextAreaValue}
            placeholder="Введите ответ на комментарий"
          />
          <Button
            color="yellow-middle"
            text="Ответить"
            onClick={() => onClickUpdateCommentHandler(true)}
          />
        </div>
      )}
      {comment.comments.length >= 1 ? (
        <div className={styles.comment__comments__block}>
          {comment.comments.map((comm, index) => (
            <Comment key={index} currentComment={comm} />
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Comment;
