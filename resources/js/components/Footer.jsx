import styles from "./../../css/styles/footer.module.scss"
import logo from "./../../assets/logo.png"
import cert from "./../../assets/cert.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return (
        <footer className={styles.Footer}>
           <div className={styles.upside}>
                <div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="text-justify">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </div>
                </div>
                <div className={styles.quickAccess}>
                    <h3>دسترسی سریع</h3>
                    <ul>
                        <li>محصولات</li>
                        <li>تماس با ما</li>
                        <li>درباره ما</li>
                        <li>اخبار و مقالات</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h3>راه‌های ارتباطی</h3>
                    <ul>
                        <li>
                            <span>همراه</span> <span>091111111</span>
                        </li>
                        <li>
                            <span>همراه</span> <span>091111111</span>
                        </li>
                        <li>
                            <span>همراه</span> <span>091111111</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.certs}>
                    <h3>مجوز ها</h3>
                    <div className="flex justify-around" >
                        <div>
                            <img src={cert} alt="" />
                        </div>
                        <div>
                            <img src={cert} alt="" />
                        </div>
                    </div>
                </div>
           </div>
           <hr />
           <div className={styles.downside}>
               <div className={styles.social}>
                    <div>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </div>
               </div>
               <div>
                    <p>تمامی حقوق مادی و معنوی برای وبسایت محفوظ است</p>
               </div>
           </div>

        </footer>
    )
}