import React, { useState } from 'react';
import styles from './UserLinks.module.scss';
import ProfileLink from '../../../UserProfile/ui/ProfileLink';
import profile from '@/assets/home.svg';
import friend from '@/assets/friend.svg';
import review from '@/assets/review.svg';
import likes from '@/assets/likes.svg';
import comments from '@/assets/comments.svg';
import films from '@/assets/films.svg';
import persons from '@/assets/comments.svg';

const UserLinks = () => {
  const [state, setState] = useState('1');

  const onChangeState = (data: string) => {
    setState(data);
  };
  return (
    <div className={styles.flex}>
      <ProfileLink
        link="/myProfile"
        numb="1"
        setActive={onChangeState}
        active={state}
        alt="profile"
        imageLink={profile}
      />
      <ProfileLink
        numb="2"
        link="/myFriends"
        setActive={onChangeState}
        active={state}
        alt="friend"
        imageLink={friend}
      />
      <ProfileLink
        numb="3"
        link="/myReviews"
        setActive={onChangeState}
        active={state}
        alt="review"
        imageLink={review}
      />
      <ProfileLink
        numb="4"
        link="/myLikes"
        setActive={onChangeState}
        active={state}
        alt="likes"
        imageLink={likes}
      />
      <ProfileLink
        numb="5"
        link="/myComments"
        setActive={onChangeState}
        active={state}
        alt="comments"
        imageLink={comments}
      />
      <ProfileLink
        numb="6"
        link="/myFilms"
        setActive={onChangeState}
        active={state}
        alt="films"
        imageLink={films}
      />
      <ProfileLink
        numb="7"
        link="/myActors"
        setActive={onChangeState}
        active={state}
        alt="actors"
        imageLink={persons}
      />
    </div>
  );
};

export default UserLinks;
