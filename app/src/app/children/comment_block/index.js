import React from "react";
import { getCaptionFromEdges } from "../image/helpers";
import CommentItem from "./children/comment_item/index"

const CommentBlock = (props) => {
  const { data } = props;
  let commentArray = Array.from(data.edge_media_to_comment.edges);
  return (
    <div className="post-info-section">
      <div className="image-caption">
        <p>
          <span className="account-username">{data.owner.username}</span>
          {getCaptionFromEdges(data.edge_media_to_caption)}{" "}
        </p>
      </div>

      <div>
        {commentArray.map((comments) => (
          <div key={comments.node.id}>
            <CommentItem comments={comments} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBlock;
