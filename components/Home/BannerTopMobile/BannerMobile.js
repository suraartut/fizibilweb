import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./bannermobile.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const BannerMobile = () => {
  return (
    <div className={styles.mobile_slider}>
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
            height={420}
            alt="Bilgisayarlı Görü"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-8 text-end">
              <h3 className="font-bold text-white text-xl">Bilgisayarlı</h3>
              <p className={styles.second_line}>Görü Sistemi</p>
              <Link href="/" className={styles.button}>
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/dogalgaz-sayac.png"
            width={390}
            height={420}
            alt="Doğalgaz Sayaç Okuma"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-6 text-start">
              <h3 className="font-bold text-white text-base pb-[2px]">
                Yapay Zekâ ve Görüntü İşleme ile
              </h3>
              <p className={styles.second_line}>Doğalgaz Sayacı Okuma</p>
              <Link href="/sayac" className={styles.button}>
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/elektrik-sayac.png"
            width={390}
            height={420}
            alt="Elektrik Sayacı Okuma"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-6 text-start">
              <h3 className="font-bold text-white text-base pb-[2px]">
                Yapay Zekâ ve Görüntü İşleme ile
              </h3>
              <p className={styles.second_line}>Elektrik Sayacı Okuma</p>
              <Link href="/sayac" className={styles.button}>
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerMobile;
