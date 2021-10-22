import React, { useState } from "react";
import LikedIcon from "./children/liked_icon";
import UnLikedIcon from "./children/unliked_icon";

const LikeButton = (props) => {
  const { data } = props;
  const [like, setLike] = useState(data.viewer_has_liked);
  const setLikeStatus = () => setLike((value) => !value);
  const [likeValue, setLikeValue] = useState(
    data.edge_media_preview_like.count
  );

  const increaseLikeValue = () =>
    setLikeValue(data.edge_media_preview_like.count + 1);
  const decreaseLikeValue = () =>
    setLikeValue(data.edge_media_preview_like.count);

  const unixTime = data.taken_at_timestamp;
  const postDate = new Date(unixTime * 1000);

  let today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const diffDays = (date, otherDate) =>
    Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

  return (
    <div className="like-section">
      <div className="like-info-container">
        <p className="like-counter">{likeValue} Likes</p>
        <p className="date-posted">{diffDays(postDate, today)} days ago </p>
      </div>
      {like ? (
        <div
          className="like-icon"
          onClick={() => {
            setLikeStatus();
            decreaseLikeValue();
          }}
        >
          <LikedIcon />
        </div>
      ) : (
        <div
          className="like-icon"
          onClick={() => {
            setLikeStatus();
            increaseLikeValue();
          }}
        >
          <UnLikedIcon />
        </div>
      )}
    </div>
  );
};

export default LikeButton;
