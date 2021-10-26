import React from 'react'
import Image from './children/image'
import LikeSection from './children/like_button'
import styles from './styles'
import UserBlock from './children/user_block/index'
import CommentBlock from './children/comment_block/index'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div className='image-container' style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <div className='content-bar'>
          <UserBlock data={data} style={styles.UserBlock} />
          <CommentBlock data={data} />
          <LikeSection data={data} />
        </div>
      </div>
    </main>
  )
}

export default App
