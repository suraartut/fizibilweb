import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const BannerTop = () => {
  return (
    <div className="lg:h-[100vh] h-[45vh] w-full pt-[88px] lg:block hidden">
      <Swiper
        loop={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/bilgisayarli-goru.png"
            width={1920}
            height={950}
            alt="Görüntü İşleme"
          />
          <div className="w-1/3 left-[55%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">Görüntü İşleme</h3>
              <p className="pb-10 pt-4 text-white text-xl">
                Dijital görüntülerin elde edilerek işlenmesi ve analizini
                gerçekleştirerek gerçek dünyadan sayısal veya sembolik bilgileri
                çıktı olarak elde edebiliyoruz
              </p>
              <Link
                href="/goruntu-isleme"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                Keşfedİn
              </Link>
            </div>
          </div>
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
            src="/assets/Images/slider/yigma-slider.png"
            width={1920}
            height={950}
            alt="Fizibil Yığma Yazılımı"
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
