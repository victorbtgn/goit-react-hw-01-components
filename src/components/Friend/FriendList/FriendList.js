import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    <FriendListItem friends={friends} />
  </ul>
);

export default FriendList;
