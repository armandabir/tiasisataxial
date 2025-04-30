
import styles from "./../../css/styles/slider.module.scss"
import MySwiper from "./MySwiper"
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import img1 from "./../../assets/1.jpg"
import img2 from "./../../assets/1.jpg"
import img3 from "./../../assets/1.jpg"
import img4 from "./../../assets/1.jpg"
import img5 from "./../../assets/1.jpg"
import mouseShape from "./../../assets/mouse.png"
export default function Slider(){
    return (
        <div className={styles.slider}>
            <MySwiper imgs={[img1,img2,img3,img4,img5]} className="h-full" 
                    modules={[Autoplay,Navigation, Pagination, Scrollbar]}
                    autoplay={{
                        delay:3000,
                        disableOnInteraction:true,
                    }}
                   
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: `.${styles.customPagination}`,
                        renderBullet: function (index, className) {   
                            return `<span class="${className} ${styles.customBullet}"></span>`;
                          }
                      
                    }}
                    onSlideChange={(swiper)=>{
                        // console.log(swiper)
                        const bullets = document.querySelectorAll(`.${styles.customBullet}`);
                        bullets.forEach((bullet, index) => {
                            if (index === swiper.activeIndex) {
                                bullet.classList.add(styles.bulletActive);
                            } else {
                                bullet.classList.remove(styles.bulletActive);
                            }
                        });
                    }}
                    navigation={{
                        nextEl:`.${styles.customNext}`,
                        prevEl:`.${styles.customPrv}`
                    }}
            />
            <div className={styles.swiperControls}>
                    
                <div className={styles.emptySpace}>
                    <h1 className="mt-[10%] font-bold md:text-6xl md:text-right text-4xl text-center">
                        شرکت فنی مهندسی اکسیال
                    </h1>
                    <h2 className="mt-[8%] md:text-3xl text-2xl md:text-right text-center">
                        ارائه کننده‌ی انواع خدمات مهندسی و تاسیسات ساختمان   
                    </h2>
                </div>
                <div className={styles.navigationButtons}>
                    <button className={styles.customPrv}><FontAwesomeIcon icon={faChevronRight}/></button>
                    <button className={styles.customNext}><FontAwesomeIcon icon={faChevronLeft}/></button>
                </div>
                <div>
                    <p className="md:w-1/2 text-justify">
                    لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                    </p>
                </div>
                <div className={styles.customPagination}></div>
                <div className={styles.mouseShape}>
                    <img src={mouseShape} alt="" />
                </div>
                <div className={styles.socialMedia}>
                    <div className={styles.btContainer}>
                        <a href="">twitter</a>
                        <a href="">Instagram</a>
                        <a href="">Facebook</a>
                    </div>
                    
                </div>
            </div>
            <div className={styles.transitonColor}></div>
        </div>
    )
}