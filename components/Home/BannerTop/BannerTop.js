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
    <div className="lg:h-screen h-[40vh] w-full">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/Images/banner1.png"
            width={1920}
            height={950}
            alt="Slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/banner-2.png"
            width={1920}
            height={950}
            alt="Slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/banner3.png"
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
