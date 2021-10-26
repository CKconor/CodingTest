import React, { useState } from "react";
import UnLikedIcon from "../../../like_button/children/unliked_icon/index";
import LikedIcon from "../../../like_button/children/liked_icon/index";
import styles from "./styles";

const CommentItem = ({ comments, data }) => {
  const [like, setLike] = useState(comments.likedByViewer);
  const setLikeStatus = () => setLike((value) => !value);
  const userArray = Array.from(data.edge_media_to_comment.edges);
  const deleted = comments.deleted;

  return (
    <div>
      {deleted ? null : (
        <div style={styles.block}>
          <p style={styles.comment}>
            <span style={styles.username}>
              {
                userArray.find((user) => user.node.text === comments.text).node
                  .owner.username
              }
            </span>
            {comments.text}
          </p>
          <div
            style={styles.icon}
            onClick={() => {
              setLikeStatus();
            }}
          >
            {like ? <LikedIcon /> : <UnLikedIcon />}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
