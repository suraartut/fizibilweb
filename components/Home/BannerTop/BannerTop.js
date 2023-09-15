import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const BannerTop = () => {
  return (
    <div className="lg:h-screen h-[45vh] w-full pt-[88px]">
      <Swiper
        loop={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/Images/bilgisayarli-goru.png"
            width={1920}
            height={950}
            alt="Slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/sayac-okuma-mobil.png"
            width={1920}
            height={950}
            alt="Slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/sayac-okuma-tablet.png"
            width={1920}
            height={950}
            alt="Slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/tarihi-eser.png"
            width={1920}
            height={950}
            alt="Slider"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerTop;
