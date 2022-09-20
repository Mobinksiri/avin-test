import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const LongEl = styled.div`
   display: flex;
   max-width: 1600px;
   margin: 0 auto;
   margin-bottom: 50px;

   .long-item {
      width: 100%;

      img {
         width: 100%;
         height: 250px;
         object-fit: cover;
      }
   }
`;

const Long = () => {
   const banners = useSelector((state) =>
      state.data.posts.data.find(
         (item) => item.type === "banner" && item.data.style.type === "long"
      )
   );

   return (
      <LongEl>
         <Swiper spaceBetween={5} slidesPerView={1} grabCursor>
            {banners.data.items.map((item) => (
               <SwiperSlide key={item.image_path}>
                  <div className='long-item'>
                     <img src={item.image_path} alt='' />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </LongEl>
   );
};

export default Long;
