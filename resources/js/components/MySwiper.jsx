import {Swiper,SwiperSlide}from 'swiper/react';
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';


import img1 from "./../../assets/1.jpg"
import img2 from "./../../assets/1.jpg"
import img3 from "./../../assets/1.jpg"

export default function MySwiper({imgs}){
    return (
        <Swiper className="h-full"
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
            delay:3000,
            disableOnInteraction:false,
        }}
        spaceBetween={50}
        slidesPerView={1}

        >
                {
                    imgs.map((img)=><SwiperSlide><img src={img1} alt="" /></SwiperSlide>)
                }

        </Swiper>
    )
}