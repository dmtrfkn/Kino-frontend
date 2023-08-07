import React, { useState } from 'react';
import styles from './UserLinks.module.scss';
import ProfileLink from '../ui/ProfileLink';
import home from '@/assets/home.svg';
import friend from '@/assets/friend.svg';
import review from '@/assets/review.svg';
import likes from '@/assets/likes.svg';
import comments from '@/assets/comments.svg';
import films from '@/assets/films.svg';
import persons from '@/assets/comments.svg';

const UserLinks = () => {
  const [state, setState] = useState(false);

  const onChangeState = () => {
    setState((prev) => !prev);
  };
  return (
    <div className={styles.flex}>
      <ProfileLink onClickProp={onChangeState} active={state} alt="home" imageLink={home} />
      <ProfileLink onClickProp={onChangeState} active={state} alt="friend" imageLink={friend} />
      <ProfileLink onClickProp={onChangeState} active={state} alt="review" imageLink={review} />
      <ProfileLink onClickProp={onChangeState} active={state} alt="likes" imageLink={likes} />
      <ProfileLink onClickProp={onChangeState} active={state} alt="comments" imageLink={comments} />
      <ProfileLink onClickProp={onChangeState} active={state} alt="films" imageLink={films} />
      <ProfileLink onClickProp={onChangeState} active={state} alt="famous" imageLink={persons} />
    </div>
  );
};

export default UserLinks;
