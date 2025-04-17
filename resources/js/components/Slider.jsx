
import styles from "./../../css/styles/slider.module.scss"
import MySwiper from "./MySwiper"
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import img1 from "./../../assets/1.jpg"
import img2 from "./../../assets/1.jpg"
import img3 from "./../../assets/1.jpg"
import img4 from "./../../assets/1.jpg"
import img5 from "./../../assets/1.jpg"
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
                        console.log(swiper)
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
            <div className={styles.customPagination}></div>
            <div className={styles.navigationButtons}>
                <button className={styles.customPrv}></button>
                <button className={styles.customNext}></button>
            </div>
        </div>
    )
}