import styles from "./../../css/styles/engServices.module.scss"
import { BlueWhiteBg } from "./BlueWhiteBg"
import bolt1 from "./../../assets/bolt1.png"
import bolt2 from "./../../assets/bolt2.png"
import bolt3 from "./../../assets/bolt3.png"
import bolt4 from "./../../assets/bolt4.png"
import Card1 from "./Card1"
import TransitionSection from "./TransitionSection"
import Card2 from "./Card2"
export default function EngServices(){
    
    return (
        <section className={styles.container}>
            <BlueWhiteBg className="h-4/5 -scale-y-100 absolute w-full left-1/2 -translate-x-2/4 z-10"/>
            <div className={styles.cards}>
                <Card1 className="bg-[url('/resources/assets/rectangle1.jpg')] bg-auto" icon={bolt1} title="مهندسین مشاور" desc="مهندسین مشاور با بهره‌گیری از تخصص و تجربه، در تمامی مراحل طراحی، نظارت و مشاوره فنی پروژه‌های ساختمانی همراه شما هستند تا بهترین راهکارهای مهندسی را ارائه دهند"/>
                <Card2 img="bg-[url('/resources/assets/rectangle1.jpg')]" title="تور تماشای ستارگان" />
            </div>
            <TransitionSection className="h-1/4 bottom-0 z-30"/>
        </section>
    )
}   