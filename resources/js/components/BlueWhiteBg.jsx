import img from "./../../assets/blue-white-bg.png"
import styles from "./../../css/styles/BlueWhiteBg.module.scss"
export function BlueWhiteBg({className}){
    return(
        <div className={`${styles.container}  ${className}`}>
            <img src={img} alt="" />
        </div>
    )
}