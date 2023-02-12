import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"


function App() {

  return (
    <div>
      <Header />
   
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post
       author="André Luiz" 
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut culpa sint saepe accusantium itaque quas, 
      aperiam pariatur adipisci non repellat officiis dolorem facilis. Et vel in vero impedit quia beatae."/>
      <Post />
      </main>
      </div>

    </div>
  )
}

export default App
