import React from 'react'
import '../../index'
import styles from './styles'

const UserBlock = (props) => {
  const { data } = props
  return (
    <div>
      <div style={styles.main}>
        <div style={styles.logo}>
          <img
            style={styles.icon}
            src={data.owner.profile_pic_url}
            alt={data.owner.username + "'s profile picture"}
          />
        </div>
        <div style={styles.container}>
          <p style={styles.username}>{data.owner.username}</p>
          <p style={styles.location}>{data.location.name}</p>
        </div>
      </div>
    </div>
  )
}

export default UserBlock
