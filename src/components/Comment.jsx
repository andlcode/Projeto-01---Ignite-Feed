import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="#" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Luiz</strong>
              <time title="11 de Maio às 08:13h" dataTime="2022-05-11 08:13:30">Publicado cerca de 1h atrás</time>

            </div>
            <button title="Deletar comentário"><Trash size={20} /></button>
          </header>

          <p>Muito bom Devon, parabéns! </p>
        </div>
        <footer>
        <button>
          <ThumbsUp >
            Aplaudir <span>20</span>
          </ThumbsUp>
        </button>
        </footer>
      </div>
    </div>
  )
}