
import styles from "./../../css/styles/slider.module.scss"
import MySwiper from "./MySwiper"

export default function Slider({imgs}){
    return (
        <div className={styles.slider}>
            <MySwiper imgs={imgs}/>
        </div>
    )
}