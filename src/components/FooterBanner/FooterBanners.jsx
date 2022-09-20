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

const FooterBannersEl = styled.div`
   margin-bottom: 20px;

   .footer-items {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .footer-item {
         width: 100%;
         max-height: 300px;

         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
         }
      }
   }
`;

const Quad = () => {
   const footerBanners = useSelector((state) =>
      state.data.posts.data.find(
         (item) => item.type === "banner" && item.data.style.type === "item"
      )
   );

   return (
      <FooterBannersEl>
         <Container>
            <div className='footer-items'>
               {footerBanners.data.items.map((item) => (
                  <div key={item.image_path} className='footer-item'>
                     <img src={item.image_path} alt='' />
                  </div>
               ))}
            </div>
         </Container>
      </FooterBannersEl>
   );
};

export default Quad;
