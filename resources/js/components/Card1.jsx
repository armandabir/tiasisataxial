import styles from "./../../css/styles/card1.module.scss"
export default function Card1 ({icon,title,desc}){
    return(
        <div className={styles.card}>
            <div>
                <img src={icon} alt="" />                
            </div>
            <h3>{title}</h3>
            <p>
                {desc}
            </p>
        </div>
    )
}