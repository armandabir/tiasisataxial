import {Swiper,SwiperSlide}from 'swiper/react';
import 'swiper/css';

import "swiper/css/pagination"
import "swiper/css/navigation"

export default function MySwiper({imgs,className,...props}){
    console.log(props.navigation)
    return (
        <Swiper className={className} {...props}>
                
                {
                    imgs.map((img,index)=><SwiperSlide key={index}><img src={img} alt="" /></SwiperSlide>)
                }

        </Swiper>
    )
}