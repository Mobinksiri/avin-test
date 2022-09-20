import React from "react";
import styled from "styled-components";
import Container from "../Reusable/Container";
import { useSelector } from "react-redux";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const QuadEl = styled.div`
   margin-bottom: 100px;

   .quad-item {
      width: 100%;
      max-height: 265px;

      img {
         width: 100%;
         object-fit: cover;
      }
   }
`;

const Quad = () => {
   const filteredDate = useSelector((state) =>
      state.data.posts.data.find(
         (item) => item.type === "banner" && item.data.style.type === "quad"
      )
   );

   console.log(filteredDate);

   return (
      <QuadEl>
         <Container>
            <Swiper
               modules={[Autoplay]}
               spaceBetween={20}
               autoplay={{ delay: 3000, disableOnInteraction: true }}
               slidesPerView={5}
               grabCursor
            >
               {filteredDate.data.items.map((item) => (
                  <SwiperSlide key={item.image_path}>
                     <div className='quad-item'>
                        <img src={item.image_path} alt='' />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </Container>
      </QuadEl>
   );
};

export default Quad;
