import styles from "./../../css/styles/footer.module.scss"
import logo from "./../../assets/logo.png"
import cert from "./../../assets/cert.png"
import cert1 from "./../../assets/cert.png"
import cert2 from "./../../assets/cert.png"

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
                        <p>
                            آدرس : رشت - بلوار نماز - ابتدای پل صابرین - نبش خیابان سوگند - طبقه اول
                        </p>
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
                    <h3>تلفن تماس</h3>
                    <ul>
                        <li>
                             <span>09106742601</span>
                        </li>
                        <li>
                             <span>09113343989</span>
                        </li>
                        <li>
                             <span>09113847982</span>
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