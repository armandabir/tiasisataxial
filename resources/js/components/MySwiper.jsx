import {Swiper,SwiperSlide}from 'swiper/react';
import 'swiper/css';

import "swiper/css/pagination"


export default function MySwiper({imgs,className,...props}){
    return (
        <Swiper className={className} {...props}>
                
                {
                    imgs.map((img,index)=><SwiperSlide key={index}><img src={img} alt="" /></SwiperSlide>)
                }

        </Swiper>
    )
}