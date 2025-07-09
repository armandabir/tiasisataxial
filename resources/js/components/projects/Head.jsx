import { BlueWhiteBg } from "../BlueWhiteBg"
import styles from "./../../../css/styles/projects/head.module.scss"
export default function Head() {
    return (
        <div className={styles.head}>
            <div className={styles.imgContainer}>
                <img src="/assets/projects/recycle.jpg" alt="" />
            </div>
            <BlueWhiteBg className="absolute top-0 left-0 w-full h-5/6 -scale-x-100"/>
        </div>
    )
}