import Friends from '@/widgets/Friends';
import ProfileLayout from '@/widgets/ProfileLayout';
import React from 'react';

const myFriends = () => {
  return (
    <ProfileLayout>
      <Friends />
    </ProfileLayout>
  );
};

export default myFriends;
