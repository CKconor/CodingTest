import React from 'react'
import "../../index";

const UserBlock = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="user-block">
        <div className="logo-container">
          <img
            className="user-icon"
            src={data.owner.profile_pic_url}
            alt={data.owner.username + "'s profile picture"}
          />
        </div>
        <div className="user-info-container">
          <p className="account-username">{data.owner.username}</p>
          <p className="account-location">{data.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
