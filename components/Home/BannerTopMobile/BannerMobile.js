import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const BannerMobile = () => {
  return (
    <div className="lg:h-screen h-[53vh] w-full pt-[88px] lg:hidden block">
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
            src="/assets/Images/mobil-slider/bilgisayarli-goru.png"
            width={390}
            height={360}
            alt="Bilgisayarlı Görü"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/dogalgaz-sayac.png"
            width={390}
            height={360}
            alt="Doğalgaz Sayaç Okuma"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/elektrik-sayac.png"
            width={390}
            height={360}
            alt="Elektrik Sayacı Okuma"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerMobile;
