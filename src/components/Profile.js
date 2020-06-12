import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/defaultAvatar.jpg";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">&#64;{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>

      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>

      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
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
