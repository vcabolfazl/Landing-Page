import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import SliderCard from './SliderCard';

export default function Slider() {
 return (
  <>
   <Swiper style={{ paddingTop: "50px", }}
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
     clickable: true,
     type: 'progressbar',
    }}
    breakpoints={{
     640: {
      slidesPerView: 2,
      spaceBetween: 20,
     },
     768: {
      slidesPerView: 2,
      spaceBetween: 40,
     },
     1024: {
      slidesPerView: 3,
      spaceBetween: 30,
     },
    }}

    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
   >
    <SwiperSlide>
     <SliderCard
      AvatarSrc={"/assets/Images/Avatar/Avatar.png"}
      userName={"Cameron Williamson"}
      job={"Web Designer"}
      desc={"Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus."}
      gradient={"linear-gradient(45deg, #240217, #570738, #941061, #eb2da2, #ff7dcd)"}
     />
    </SwiperSlide>

    <SwiperSlide>
     <SliderCard
      AvatarSrc={"/assets/Images/Avatar/Avatar1.png"}
      userName={"Esther Howard"}
      job={"PHP Developer"}
      desc={"At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus"}
      gradient={"linear-gradient(45deg, #565be3, #0f167d)"}
     />
    </SwiperSlide>

    <SwiperSlide>
     <SliderCard
      AvatarSrc={"/assets/Images/Avatar/Avatar2.png"}
      userName={"Jenny Wilson"}
      job={"UI/UX Designer"}
      desc={"Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec."}
      gradient={"linear-gradient(45deg, #8eb309, #d8ff4a)"}
     />
    </SwiperSlide>

    <SwiperSlide>
     <SliderCard
      AvatarSrc={"/assets/Images/Avatar/Avatar.png"}
      userName={"Cameron Williamson"}
      job={"Web Designer"}
      desc={"Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus."}
      gradient={"linear-gradient(45deg, #76fab3, #6be1a1, #61c890, #57af7f, #4d976e)"}
     />
    </SwiperSlide>

    <SwiperSlide>
     <SliderCard
      AvatarSrc={"/assets/Images/Avatar/Avatar1.png"}
      userName={"Esther Howard"}
      job={"PHP Developer"}
      desc={"At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus"}
      gradient={"linear-gradient(45deg, #c20ea1, #dd2d7f, #ee4c5e, #f46d41)"}
     />
    </SwiperSlide>

    <SwiperSlide>
     <SliderCard
      AvatarSrc={"/assets/Images/Avatar/Avatar2.png"}
      userName={"Jenny Wilson"}
      job={"UI/UX Designer"}
      desc={"Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec."}
      gradient={"linear-gradient(45deg, #c20ea1, #dd2d7f, #ee4c5e, #f46d41)"}
     />
    </SwiperSlide>

   </Swiper>
  </>
 );
}
