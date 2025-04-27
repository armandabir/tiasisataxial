import styles from "./../../css/styles/saleAgency.module.scss"
import MySwiper from "./MySwiper"
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
 import bolt1 from "./../../assets/bolt1.png"
import Card1 from "./Card1"
import Button from "./Button";
import Card2 from "./Card2";
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
                    <Card2 img="../../assets/ayegh.jpg" tilte="دیگ چگالی" likes={25} price={700}/>
                  
                ]}
                />
                <div className="md:w-1/4 mx-auto shrink-0 text-center">
                    <h2 className="text-3xl my-[10%] font-iranSansBold">نمایندگی فروش تجهیزات</h2>
                    <Button className="w-2/4 my-[5%] bg-orange-400 xl:p-3">مشاهده نمایندگی</Button>
                </div>
            </div>
           
        </section>
    )
}