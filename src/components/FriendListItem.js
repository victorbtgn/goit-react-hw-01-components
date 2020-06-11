import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className="friend-list__item">
        <span className="friend-list__item-status"></span>
        <img
          className="friend-list__item-avatar"
          src={avatar}
          alt={name}
          width="48"
        />
        <p className="friend-list__item-name">{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
