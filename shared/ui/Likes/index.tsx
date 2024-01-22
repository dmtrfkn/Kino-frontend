import { FC, useEffect, useState } from 'react';
import styles from './Likes.module.scss';

interface LikesProps {
  countLike: number;
  countDislike: number;
  addLike: (like: number) => void;
  addDisLike: (like: number) => void;
  preLikes?: boolean;
  onClick: (like: number, dislike: number) => void;
  preDislikes?: boolean;
}

const Likes: FC<LikesProps> = ({
  countDislike,
  countLike,
  addDisLike,
  addLike,
  preDislikes = false,
  preLikes = false,
  onClick,
}) => {
  const [likesFlag, setLikesFlag] = useState<boolean>(preLikes);
  const [dislikesFlag, setDislikesFlag] = useState<boolean>(preDislikes);

  const addLikeHandler = () => {
    onClick(!likesFlag ? 1 : -1, dislikesFlag ? -1 : 0);
    !likesFlag ? addLike(countLike + 1) : addLike(countLike - 1);
    setLikesFlag((prev) => !prev);
    if (dislikesFlag) {
      addDisLike(countDislike - 1);
      setDislikesFlag((prev) => !prev);
    }
  };
  const addDisLikeHandler = () => {
    onClick(likesFlag ? -1 : 0, !dislikesFlag ? 1 : -1);
    !dislikesFlag ? addDisLike(countDislike + 1) : addDisLike(countDislike - 1);
    setDislikesFlag((prev) => !prev);
    if (likesFlag) {
      addLike(countLike - 1);
      setLikesFlag((prev) => !prev);
    }
  };

  useEffect(() => {
    if (preLikes) setLikesFlag((prev) => !prev);
    if (preDislikes) setDislikesFlag((prev) => !prev);
  }, [preLikes, preDislikes]);

  return (
    <div className={styles.likes}>
      <div className={styles.flex}>
        <span
          className={
            likesFlag
              ? styles.button + ' ' + styles.like + ' ' + styles.active__like
              : styles.button + ' ' + styles.like
          }
          onClick={addLikeHandler}>
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
        {countLike ? (
          <span onClick={addLikeHandler} className={styles.count}>
            {countLike}
          </span>
        ) : (
          <span className={styles.count}>0</span>
        )}
      </div>
      <div className={styles.flex}>
        <span
          className={
            dislikesFlag
              ? styles.button + ' ' + styles.dislike + ' ' + styles.active__dislike
              : styles.button + ' ' + styles.dislike
          }
          onClick={addDisLikeHandler}>
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
        {countDislike ? (
          <span onClick={addDisLikeHandler} className={styles.count}>
            {countDislike}
          </span>
        ) : (
          <span className={styles.count}>0</span>
        )}
      </div>
    </div>
  );
};

export default Likes;
