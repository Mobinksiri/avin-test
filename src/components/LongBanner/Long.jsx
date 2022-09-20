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

   .swiper {
      .swiper-pagination {
         span {
            background-color: #fff;
            opacity: 0.3;
            width: 5px;
            height: 5px;
         }
         .swiper-pagination-bullet-active {
            opacity: 0.8;
         }
      }
   }

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
   const filteredDate = useSelector((state) =>
      state.data.posts.data.find(
         (item) => item.type === "banner" && item.data.style.type === "long"
      )
   );

   return (
      <LongEl>
         <Swiper spaceBetween={5} slidesPerView={1} grabCursor>
            {filteredDate.data.items.map((item) => (
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
