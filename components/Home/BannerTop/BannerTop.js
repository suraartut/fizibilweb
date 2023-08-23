import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const BannerTop = () => {
  return (
    <div className="lg:h-screen h-[50vh] w-full">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/Images/slider-1.jpg"
            width={1920}
            height={1080}
            alt="Slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/slider-2.jpg"
            width={5472}
            height={3648}
            alt="Slider"
          />
        </SwiperSlide>
        <SwiperSlide>mobil hamburgeri düzelt</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerTop;
