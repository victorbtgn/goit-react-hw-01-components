import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

// V 1

// const FriendList = ({ friends }) => (
//   <ul className={styles.friendList}>
//     <FriendListItem friends={friends} />
//   </ul>
// );

// V 2

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

export default FriendList;
