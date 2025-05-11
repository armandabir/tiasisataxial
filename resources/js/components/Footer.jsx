import styles from "./../../css/styles/footer.module.scss"
import logo from "./../../assets/logo.png"
import cert from "./../../assets/cert.png"
export default function Footer(){
    return (
        <footer className={styles.Footer}>
           <div className={styles.upside}>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </div>
                <div>
                    <h3>دسترسی سریع</h3>
                    <ul>
                        <li>محصولات</li>
                        <li>تماس با ما</li>
                        <li>درباره ما</li>
                        <li>اخبار و مقالات</li>
                    </ul>
                </div>
                <div>
                    <h3>راه‌های ارتباطی</h3>
                    <li>
                        <span>همراه</span> <span>091111111</span>
                    </li>
                    <li>
                        <span>همراه</span> <span>091111111</span>
                    </li>
                    <li>
                        <span>همراه</span> <span>091111111</span>
                    </li>
                </div>
                <div>
                    <h3>مجوز ها</h3>
                    <div>
                        <img src={cert} alt="" />
                    </div>
                    <div>
                        <img src={cert} alt="" />
                    </div>
                </div>
           </div>
           <hr />
           <div className={styles.downside}>

           </div>

        </footer>
    )
}