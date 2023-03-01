import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content}) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://xesque.rocketseat.dev/users/avatar/profile-f62909c7-8786-4851-83c5-e91679e19ff1-1627195178177.jpg" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Luiz</strong>
              <time title="11 de Maio às 08:13h" dataTime="2022-05-11 08:13:30">Publicado cerca de 1h atrás</time>

            </div>
            <button title="Deletar comentário"><Trash size={20} /></button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
        <button>
          <ThumbsUp />
            Aplaudir <span>20</span>
            </button>
       
        </footer>
      </div>
    </div>
  )
}