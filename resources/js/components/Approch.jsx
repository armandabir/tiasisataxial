import { BlueWhiteBg } from "./BlueWhiteBg";
import styles from "./../../css/styles/approch.module.scss"
export default function Approch(){
    return(
        <div className={styles.Approch}>
            <div className={styles.banner}>
                <div className={styles.slogan}>
                    <h2>راه حل بودن، تعهد ماست</h2>
                </div>
            </div>
            <BlueWhiteBg className="h-4/5 w-full absolute left-1/2 transform -translate-x-1/2 z-10"/>
        </div>
    )
}