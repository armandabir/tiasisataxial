import { BlueWhiteBg } from "../BlueWhiteBg"
import styles from "./../../../css/styles/projects/head.module.scss"
export default function Head({img}) {
    return (
        <div className={styles.head}>
            <div className={styles.imgContainer}>
                <img src={`/storage/articles/${img}`} alt="" />
            </div>
            <BlueWhiteBg className="absolute top-0 left-0 w-full h-5/6 -scale-x-100"/>
        </div>
    )
}