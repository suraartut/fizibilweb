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
          <Image
            src="/assets/Images/mobil-slider/bilgisayarli-goru.png"
            width={390}
            height={360}
            alt="Bilgisayarlı Görü"
            className="contrast-50"
          />
          <div className="w-full absolute">
            <div className="p-10 text-end">
              <h3 className="font-bold text-white">
                Bilgisayarlı Görü Sistemi
              </h3>
              <p className="pt-3 pb-8 text-base text-white">Açıklama</p>
              <Link
                href="/"
                className="text-white text-sm px-12 py-3 border-2 border-[#2e8fce] bg-[#2e8fce] uppercase font-semibold hover:text-[#2e8fce] hover:border-white hover:bg-white tracking-wider w-full items-center"
              >
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/dogalgaz-sayac.png"
            width={390}
            height={360}
            alt="Doğalgaz Sayaç Okuma"
            className="contrast-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/elektrik-sayac.png"
            width={390}
            height={360}
            alt="Elektrik Sayacı Okuma"
            className="contrast-50"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerMobile;
