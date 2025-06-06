import { BlueWhiteBg } from "../components/BlueWhiteBg"
import styles from "./../../css/styles/About/Intro.module.scss"
export default function Intro(){
    return (
        <section className={styles.Intro}>
            <BlueWhiteBg className="h-5/6 -scale-x-100"/>
        </section>
    )
}