import img1 from "./../../assets/1.jpg"
import styles from "./../../css/styles/slider.module.scss"
export default function Slider(){
    return (
        <div className={styles.slider}>
            <img src={img1} alt="" />
        </div>
    )
}