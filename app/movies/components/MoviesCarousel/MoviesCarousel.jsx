"use client";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import "./styles.css";

export default function MovieCarousel() {
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
      >
        <SwiperSlide style={{ height: "calc(100vh - 150px)", width: "100%" }}>
          <Image style={{objectFit:"cover"}} src="/assets/home1.jpg" alt="movie" fill />
        </SwiperSlide>
        <SwiperSlide style={{ height: "calc(100vh - 150px)", width: "100%" }}>
          <Image style={{objectFit:"cover"}} src="/assets/home2.jpg" alt="movie" fill />
        </SwiperSlide>
        <SwiperSlide style={{ height: "calc(100vh - 150px)", width: "100%" }}>
          <Image style={{objectFit:"cover"}} src="/assets/home3.jpg" alt="movie" fill />
        </SwiperSlide>
        <SwiperSlide style={{ height: "calc(100vh - 150px)", width: "100" }}>
          <Image style={{objectFit:"cover"}} src="/assets/home4.jpg" alt="movie" fill />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
