import React from "react";
import "../styles/UserCard.css";

const UserCard = ({ name, email }) => {
  return (
    <div className="user-card">
      <div className="usercircle">{name[0]}</div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
