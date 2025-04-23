import styles from "./../../css/styles/engServices.module.scss"
import { BlueWhiteBg } from "./BlueWhiteBg"
import bolt1 from "./../../assets/bolt1.png"
import Card1 from "./Card1"
export default function EngServices(){
    return (
        <section className={styles.container}>
            <BlueWhiteBg className="h-4/5 -scale-y-100 absolute w-full left-1/2 -translate-x-2/4 z-10"/>
            <div className={styles.cards}>
                <Card1 icon={bolt1} title="مهندسین مشاور" desc="مهندسین مشاور با بهره‌گیری از تخصص و تجربه، در تمامی مراحل طراحی، نظارت و مشاوره فنی پروژه‌های ساختمانی همراه شما هستند تا بهترین راهکارهای مهندسی را ارائه دهند"/>
            </div>
        </section>
    )
}   