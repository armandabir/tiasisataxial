import { BlueWhiteBg } from "../components/BlueWhiteBg"
import styles from "./../../css/styles/About/Intro.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Intro(){
    return (
        <section className={styles.Intro}>
            <div className={styles.aboutContent}>
                <div className={styles.media}>
                    <div className={styles.imgContainer}>
                        <img src="/assets/about/about-img-1.jpg" alt="" />
                        <img src="/assets/about/about-img-3.jpg" alt="" />
                        <img src="/assets/about/about-img-2.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.content}>
                    <h2>با ما آشنا شوید</h2>
                    <p>
                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، 
                    </p>

                    <div className={styles.score}>
                        <div className={styles.number}>4.9</div>
                        <div className={styles.stars}>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p>
                            میزان رضایت شما 
                        </p>
                    </div>
                </div>
            </div>
            <BlueWhiteBg className="h-[95%] -scale-x-100"/>
        </section>
    )
}