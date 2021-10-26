import React, { useState } from 'react'
import UnLikedIcon from '../../../like_button/children/unliked_icon/index'
import LikedIcon from '../../../like_button/children/liked_icon/index'
import styles from './styles'

const CommentItem = ({ comments }) => {
  const [like, setLike] = useState(comments.node.viewer_has_liked)
  const setLikeStatus = () => setLike((value) => !value)

  return (
    <div style={styles.block}>
      <p style={styles.comment}>
        <span style={styles.username}>{comments.node.owner.username}</span>
        {comments.node.text}
      </p>
      <div
            style={styles.icon} onClick={() => {
              setLikeStatus()
            }}
          >
      {like
        ? (
            <LikedIcon />
          )
        : (
            <UnLikedIcon />
          )}
        </div>
    </div>
  )
}

export default CommentItem
