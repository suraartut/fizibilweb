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
    <div className="lg:h-screen h-[45vh] w-full pt-[88px] lg:block hidden">
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
            src="/assets/Images/slider/bilgisayarli-goru.png"
            width={1920}
            height={950}
            alt="Bilgisayarlı Görü"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/dogalgaz-sayac.png"
            width={1920}
            height={950}
            alt="Doğalgaz Sayaç Okuma"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/elektrik-sayac.png"
            width={1920}
            height={950}
            alt="Elektrik Sayacı Okuma"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/fizibil-iskele.png"
            width={1920}
            height={950}
            alt="Fizibil İskele Yazılımı"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/e-ticaret.png"
            width={1920}
            height={950}
            alt="Multilevel marketing özellikli e-ticaret sitesi"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/siparis.png"
            width={1920}
            height={950}
            alt="Siparişe özel masaüstü, web ve mobil uygulamalar"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerTop;
