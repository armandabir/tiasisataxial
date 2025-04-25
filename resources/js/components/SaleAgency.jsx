import styles from "./../../css/styles/saleAgency.module.scss"
import MySwiper from "./MySwiper"
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
 import bolt1 from "./../../assets/bolt1.png"
import Card1 from "./Card1"
export default function SaleAgency(){
    return(
        <section className={styles.container}>
            <div className="relative z-30 md:flex xl:flex-row flex-col flex-wrap">
                <MySwiper 
                className="h-full md:w-2/3 shrink-0" 
                modules={[Autoplay,Navigation, Pagination, Scrollbar]}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:true,
                }}
               
                breakpoints={{
                        640:{
                            spaceBetween:0,
                            slidesPerView:2
                        },
                        1024:{
                            spaceBetween:50,
                            slidesPerView:3
                        }
                    }}

                pagination={{
                    clickable: true,
              
                }}

                sectionCard={[
                    <Card1 className="bg-[url('/resources/assets/rectangle1.jpg')] bg-auto" icon={bolt1} title="مهندسین مشاور" desc="مهندسین مشاور با بهره‌گیری از "/>,
                    <Card1 className="bg-[url('/resources/assets/rectangle1.jpg')] bg-auto" icon={bolt1} title="مهندسین مشاور" desc="مهندسین مشاور با بهره‌گیری از "/>,
                    <Card1 className="bg-[url('/resources/assets/rectangle1.jpg')] bg-auto" icon={bolt1} title="مهندسین مشاور" desc="مهندسین مشاور با بهره‌گیری از "/>,
                    <Card1 className="bg-[url('/resources/assets/rectangle1.jpg')] bg-auto" icon={bolt1} title="مهندسین مشاور" desc="مهندسین مشاور با بهره‌گیری از "/>,
                    <Card1 className="bg-[url('/resources/assets/rectangle1.jpg')] bg-auto" icon={bolt1} title="مهندسین مشاور" desc="مهندسین مشاور با بهره‌گیری از "/>
                ]}
                />
                <div className="md:w-1/4 mx-auto shrink-0">
                    <h3>نمایندگی فروش تجهیزات</h3>
                </div>
            </div>
           
        </section>
    )
}