import React, { useState } from 'react'
import LikedIcon from './children/liked_icon'
import UnLikedIcon from './children/unliked_icon'
import styles from './styles.js'

const LikeButton = (props) => {
  const { data } = props
  const [like, setLike] = useState(data.viewer_has_liked)
  const setLikeStatus = () => setLike((value) => !value)
  const [likeValue, setLikeValue] = useState(
    data.edge_media_preview_like.count
  )

  const increaseLikeValue = () =>
    setLikeValue(data.edge_media_preview_like.count + 1)
  const decreaseLikeValue = () =>
    setLikeValue(data.edge_media_preview_like.count)

  const unixTime = data.taken_at_timestamp
  const postDate = new Date(unixTime * 1000)

  const today = new Date()

  const diffDays = (date, otherDate) =>
    Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))

  return (
    <div style={styles.block}>
      <div>
        <p style={styles.counter}>{likeValue} Likes</p>
        <p style={styles.posted}>{diffDays(postDate, today)} days ago </p>
      </div>
      {like
        ? (
          <div
            style={styles.icon}
            onClick={() => {
              setLikeStatus()
              decreaseLikeValue()
            }}
          >
            <LikedIcon />
          </div>
          )
        : (
          <div
            style={styles.icon}
            onClick={() => {
              setLikeStatus()
              increaseLikeValue()
            }}
          >
            <UnLikedIcon />
          </div>
          )}
    </div>
  )
}

export default LikeButton
