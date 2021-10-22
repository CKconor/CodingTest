import React, {useState} from 'react'
import UnLikedIcon from "../../../like_button/children/unliked_icon/index";
import LikedIcon from "../../../like_button/children/liked_icon/index";

const CommentItem = ({ comments }) => {

  const [like, setLike] = useState(comments.node.viewer_has_liked);
  const setLikeStatus = () => setLike((value) => !value);

  return (
    <div className="user-comment-block">
      <p className="user-comment">
        <span className="comment-username">{comments.node.owner.username}</span>
        {comments.node.text}
      </p>
      {like ? (
        <div
          className="comment-like-icon" onClick={() => {
            setLikeStatus();
          }}>
          <LikedIcon />
        </div>
      ) : (
        <div
          className="comment-like-icon" onClick={() => {
            setLikeStatus();
          }}>
          <UnLikedIcon />
        </div>
      )}
    </div>
  );
};

export default CommentItem;
