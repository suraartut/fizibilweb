import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const BannerMobile = () => {
  return (
    <div className="lg:h-screen h-[60vh] w-full pt-[88px] lg:hidden block">
      <Swiper
        loop={true}
        pagination={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/assets/Images/mobil-slider/bilgisayarli-goru.png"
            alt="Bilgisayarlı Görü"
            className="object-fit object-cover"
          />
          <div className="absolute bg-black bg-opacity-40 p-6">
            <h3 className="font-bold text-white">Bilgisayarlı Görü Sistemi</h3>
            <p className="my-3 text-base">Açıklama</p>
            <div className="h-1 bg-[#2e8fce] mt-4 mb-8"></div>
            <Link
              href="/sayac"
              className="text-white text-base px-12 py-3 border-2 border-white"
            >
              Keşfet
            </Link>
          </div>
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
