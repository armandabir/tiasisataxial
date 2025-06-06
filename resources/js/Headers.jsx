import styles from "./../css/styles/Headers.module.scss"
import TransitionSection from "./components/TransitionSection"
export default function Headers () {
    return (
        <header className={styles.Header}>
             <div className={styles.content}>
                <h3>دسته بندی</h3>
                <ul>
                    <li>خانه . </li>
                    <li>دسته بندی</li>
                </ul>  
             </div>
             <div className={styles.imgContainer}>
                 <img src="./assets/1.jpg" alt="" />
             </div>
            <TransitionSection className="h-20 bottom-0"/>
        </header>
    )
}