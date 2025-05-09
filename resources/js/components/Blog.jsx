import styles from "./../../css/styles/blog.module.scss"
import Button from "./Button"
import Card3 from "./Card3"
import MySwiper from "./MySwiper"
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

export default function Blog(){
    return(
        <section className={styles.Blog}>
            <div className={styles.container}>
                <div className="md:w-1/4 md:h-full w-full md h-2/5 px-10 text-center flex flex-col">
                    <h2 className="font-iranSansBold text-3xl mt-[30%] mb-[20%]">وبلاگ   و اخبار</h2>
                    <Button className= "w-full bg-orange-400">مشاهده وبلاگ</Button>
                </div>
                <div className="md:w-3/4 md:h-full w-full h-3/5 relative">
                     <MySwiper 
                            className="h-full md:w-full mx-0 md:mb-[10vh] md:mt-0 md:my-[10vh]" 
                            modules={[Autoplay,Navigation, Pagination, Scrollbar]}
                            autoplay={{
                                delay:4000,
                                disableOnInteraction:true,
                            }}
                            
                            breakpoints={{
                                    640:{
                                        spaceBetween:0,
                                        slidesPerView:2
                                    },
                                    1024:{
                                        spaceBetween:20,
                                        slidesPerView:3
                                    }
                                }}
            
                            navigation={{
                                nextEl:`.${styles.mynextBt}`,
                                prevEl:`.${styles.myprevBt}`
                            }}
            
                            sectionCard={[
                                
                                <Card3  img="../../assets/ayegh.jpg" tilte="انواع تاسیسات در ساختمان" date="2 هفته پیش"/>,
                                <Card3  img="../../assets/ayegh.jpg" tilte="انواع تاسیسات در ساختمان" date="2 هفته پیش"/>,
                                <Card3  img="../../assets/ayegh.jpg" tilte="انواع تاسیسات در ساختمان" date="2 هفته پیش"/>,
                                <Card3  img="../../assets/ayegh.jpg" tilte="انواع تاسیسات در ساختمان" date="2 هفته پیش"/>
                                
                            ]}
                            />
                    <button className={styles.mynextBt}><FontAwesomeIcon icon={faChevronLeft}/></button>
                    <button className={styles.myprevBt}><FontAwesomeIcon icon={faChevronRight} /></button>
                            
                   
                </div>
            </div>
        </section>
    )
}