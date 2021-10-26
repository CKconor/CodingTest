import React from 'react'
import { getCaptionFromEdges } from '../image/helpers'
import CommentItem from './children/comment_item/index'
import styles from './styles'

const CommentBlock = (props) => {
  const { data } = props
  const commentArray = Array.from(data.edge_media_to_comment.edges)
  return (
    <div style={styles.posts}>
      <div style={styles.caption}>
        <p>
          <span style={styles.username}>{data.owner.username}</span>
          {getCaptionFromEdges(data.edge_media_to_caption)}{' '}
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
  )
}

export default CommentBlock
