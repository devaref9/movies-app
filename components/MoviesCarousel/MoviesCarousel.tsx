"use client";

import { useState, useRef, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, A11y } from "swiper";
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
          loop={true}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 10 },
            740: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3.5 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, A11y]}
          className="mySwiper2"
        >
          {movies?.map((movie) => {
            return (
              <SwiperSlide
                style={{ width: "0px", overflow: "hidden" }}
                key={movie.id}
              >
                <MovieCarouselCard movie={movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          style={
            isPhoneOrTablet
              ? { width: "0px" }
              : { display: "flex", flexBasis: "40%" }
          }
          spaceBetween={16}
          slidesPerView={1}
          allowTouchMove={false}
          autoplay={{ delay: 3000 }}
          speed={1000}
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper1"
        >
          {movies?.map((movie) => {
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
