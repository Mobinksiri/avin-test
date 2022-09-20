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

const CategoriesEl = styled.div`
   margin-bottom: 100px;

   .title {
      color: #fff;
      margin-bottom: 30px;
   }

   .category-item {
      width: 100%;
      display: flex;
      flex-direction: column;

      img {
         width: 100%;
         max-height: 265px;
         height: 100%;
         object-fit: cover;
         margin-bottom: 10px;
      }

      h5 {
         color: #fff;
      }
   }
`;

const Categories = () => {
   const filteredDate = useSelector((state) =>
      state.data.posts.data.find((item) => item.type === "category")
   );

   return (
      <CategoriesEl>
         <Container>
            <h1 className='title'>{filteredDate.data.category.title_fa}</h1>
            <Swiper
               modules={[Autoplay]}
               spaceBetween={20}
               autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
               slidesPerView={5}
               grabCursor
            >
               {filteredDate.data.items.map((item) => (
                  <SwiperSlide key={item.title_fa}>
                     <div className='category-item'>
                        <img src={item.poster_path} alt='' />
                        <h5>{item.title_fa}</h5>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </Container>
      </CategoriesEl>
   );
};

export default Categories;
