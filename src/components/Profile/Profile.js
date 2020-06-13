import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.jpg';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className="tag">&#64;{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>
          {stats.followers.toLocaleString('en-IN')}
        </span>
      </li>

      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>
          {stats.views.toLocaleString('en-IN')}
        </span>
      </li>

      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>
          {stats.likes.toLocaleString('en-IN')}
        </span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultAvatar,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
