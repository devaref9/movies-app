"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import MovieCarouselCard from "../MovieCarouselCard";
import MovieCarouselSelected from "../MovieCarouselSelected";
import { useMediaQuery } from "react-responsive";
import { TitleType } from "@/types";

type pageProps = {
  movies: TitleType[] | undefined;
};

export default function MovieCarousel({ movies }: pageProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const isPhoneOrTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="h-screen lg:h-[110vh] bg-black rounded-b-[30px] overflow-hidden">
      <div className="flex rounded-b-[30px] h-full">
        <Swiper
          style={{
            flexBasis: isPhoneOrTablet ? "100%" : "60%",
            height: "350px",
            top: isPhoneOrTablet ? "50%" : "60%",
            transform: "translateY(-50%)",
          }}
          loop={true}
          spaceBetween={isPhoneOrTablet ? 10 : 16}
          slidesPerView={isPhoneOrTablet ? 1.5 : 3.5}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {movies?.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <MovieCarouselCard movie={movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          style={
            isPhoneOrTablet
              ? { display: "none", visibility: "hidden" }
              : { display: "flex", flexBasis: "40%" }
          }
          loop={true}
          spaceBetween={16}
          slidesPerView={1}
          allowTouchMove={false}
          autoplay={{ delay: 3000 }}
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper"
        >
          {
            movies?.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <MovieCarouselSelected movie={movie} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
}
