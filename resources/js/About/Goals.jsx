import styles from "./../../css/styles/About/goals.module.scss"
import { BlueWhiteBg } from "../components/BlueWhiteBg";

export default function Goals (){
    return (
        <section className={styles.Goals}>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <img src="/assets/about/our-process.jpg" alt="" />
                </div>
                <div className={styles.textContent}>
                    <h2>اهداف و ماموریت ها</h2>
                    <p>
                        .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.number}>01</div>
                            <div className={styles.CardContent} >
                                <h3>نام هدف و ماموریت اول تیم</h3>
                                <p>
                                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.number}>01</div>
                            <div className={styles.CardContent} >
                                <h3>نام هدف و ماموریت اول تیم</h3>
                                <p>
                                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
                                </p>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.number}>01</div>
                            <div className={styles.CardContent} >
                                <h3>نام هدف و ماموریت اول تیم</h3>
                                <p>
                                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
                                     
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlueWhiteBg className="md:h-2/3 h-[33%] w-full absolute md:bottom-10 top-1/4 -translate-y-1/3 md:translate-y-0 -z-10 "/>
        </section>
    )

}