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
    <div className="lg:h-screen h-[45vh] w-full">
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
            src="/assets/Images/hafif-celik-yazilim.png"
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
            src="/assets/Images/muhen-cografya.png"
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
