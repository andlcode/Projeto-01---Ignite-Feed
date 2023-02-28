import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  console.log(props)
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src="https://xesque.rocketseat.dev/users/avatar/profile-f62909c7-8786-4851-83c5-e91679e19ff1-1627195178177.jpg" alt="" />
          <div className={styles.authorInfo}>
            <strong>André Luiz</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dataTime="2022-05-11 08:13:30">Publicado há 1h</time>
     
      </header>



  <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea name="" placeholder='Deixe um comentário' id="" cols="30" rows="10" />
          <footer>
        <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )



}