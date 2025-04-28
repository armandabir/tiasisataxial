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
            <div className="relative z-30 md:flex xl:flex-row flex-col flex-wrap md:px-20">
                <MySwiper 
                className="h-full md:w-3/5 shrink-0" 
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
                            spaceBetween:20,
                            slidesPerView:3
                        }
                    }}

          

                sectionCard={[
                    
                    <Card2 img="../../assets/ayegh.jpg" tilte="دیگ چگالی" likes={25} price={700}/>,
                    <Card2 img="../../assets/ayegh.jpg" tilte="دیگ چگالی" likes={25} price={700}/>,
                    <Card2 img="../../assets/ayegh.jpg" tilte="دیگ چگالی" likes={25} price={700}/>,
                    <Card2 img="../../assets/ayegh.jpg" tilte="دیگ چگالی" likes={25} price={700}/>
                  
                ]}
                />
                <div className="md:w-2/5 mx-auto shrink-0 text-center">
                    <h2 className="text-3xl my-[10%] font-iranSansBold">نمایندگی فروش تجهیزات</h2>
                    <Button className="w-2/4 my-[5%] bg-orange-400 xl:p-3">مشاهده نمایندگی</Button>
                </div>
            </div>
           
        </section>
    )
}