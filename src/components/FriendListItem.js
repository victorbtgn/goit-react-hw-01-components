import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ friends }) =>
  friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className="item">
        <span className="status"></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
