import { BlueWhiteBg } from "../components/BlueWhiteBg"
import styles from "./../../css/styles/About/Intro.module.scss"
export default function Intro(){
    return (
        <section className={styles.Intro}>
            <div className={styles.aboutContent}>
                <div className={styles.media}>
                    <div className={styles.imgContainer}>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.score}>socore</div>
                </div>
            </div>
            <BlueWhiteBg className="h-[95%] -scale-x-100"/>
        </section>
    )
}