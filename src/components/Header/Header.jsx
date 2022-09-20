import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeaderEl = styled.div`
   display: flex;
   max-width: 1600px;
   margin: 0 auto;
   margin-bottom: 30px;

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

   .header-item {
      width: 100%;

      img {
         width: 100%;
      }
   }
`;

const Header = () => {
   const filteredDate = useSelector((state) =>
      state.data.posts.data.find(
         (item) => item.type === "banner" && item.data.style.type === "full"
      )
   );

   return (
      <HeaderEl>
         <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={5}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            grabCursor
         >
            {filteredDate.data.items.map((item) => (
               <SwiperSlide key={item.image_path}>
                  <div className='header-item'>
                     <img src={item.image_path} alt='' />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </HeaderEl>
   );
};

export default Header;
