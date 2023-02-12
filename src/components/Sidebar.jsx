import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';
export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
        <img
        src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" 
        className={styles.cover} />
      <div className={styles.profile}>
        <img src="https://xesque.rocketseat.dev/users/avatar/profile-f62909c7-8786-4851-83c5-e91679e19ff1-1627195178177.jpg" alt="" className={styles.avatar}/>
        <strong>André Luiz</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Edtar seu perfil</a>
      </footer>
    </aside>
  );
}