import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

//  V 1

// const FriendListItem = ({ friends }) =>
//   friends.map(({ avatar, name, isOnline, id }) => {
//     const status = isOnline ? styles.online : styles.offline;

//     return (
//       <li key={id} className={styles.item}>
//         <span className={status}></span>
//         <img
//           className={styles.avatar}
//           src={avatar}
//           alt={name}
//           width="48"
//           height="48"
//         />
//         <p className={styles.name}>{name}</p>
//       </li>
//     );
//   });

//  V 2

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img
      className={styles.avatar}
      src={avatar}
      alt={name}
      width="48"
      height="48"
    />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
