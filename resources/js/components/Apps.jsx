import styles from "./../../css/styles/apps.module.scss"
import { BlueWhiteBg } from "./BlueWhiteBg"
export default function Apps(){
    return (
        <section className={styles.Apps}>
            <BlueWhiteBg className="h-full -scale-y-105 -rotate-2"/>
        </section>
    )
}