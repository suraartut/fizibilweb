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
import { Pagination, Autoplay } from "swiper/modules";

const BannerMobile = () => {
  return (
    <div className={styles.mobile_slider}>
      <Swiper
        loop={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* GÖRÜNTÜ İŞLEME SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/bilgisayarli-goru.png"
            width={390}
            height={420}
            alt="Görüntü İşleme"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-8 text-end">
              <h3 className="font-bold text-white text-xl">Görüntü</h3>
              <p className={styles.second_line}>İşleme</p>
              <Link href="/" className={styles.button}>
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* ELEKTRİK SAYAÇ SLIDER */}
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
        {/* DOĞALGAZ SAYAÇ SLIDER */}
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
        {/* YIĞMA ANALİZ SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/yigma.png"
            width={390}
            height={420}
            alt="Fizibil Yığma Analiz"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-6 text-end">
              <h3 className="font-bold text-white text-base pb-[2px]">
                Fizibil
              </h3>
              <p className={styles.second_line}>Yığma Analizi</p>
              <Link href="/sayac" className={styles.button}>
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* İSKELE ANALİZ SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/iskele.png"
            width={390}
            height={420}
            alt="Fizibil İskele Analiz"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-6 text-start">
              <h3 className="font-bold text-white text-base pb-[2px]">
                Fizibil
              </h3>
              <p className={styles.second_line}>İskele Analizi</p>
              <Link href="/iskele" className={styles.button}>
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* E-TİCARET SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/e-ticaret.png"
            width={390}
            height={420}
            alt="Multilevel marketing özellikli e-ticaret sitesi"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-6 text-start">
              <h3 className="font-bold text-white text-base pb-[2px]">
                Multilevel Marketing Özellikli
              </h3>
              <p className={styles.second_line}>E-ticaret Sitesi</p>
              <Link href="/sayac" className={styles.button}>
                Keşfedİn
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* ERP SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/mobil-slider/siparise-ozel.png"
            width={390}
            height={420}
            alt="ERP & CRM Yazılım ve Danışmanlık"
            className="contrast-50"
          />
          <div className={styles.image_card}>
            <div className="p-6 text-end">
              <h3 className="font-bold text-white text-base pb-[2px]">
                ERP & CRM
              </h3>
              <p className={styles.second_line}>Yazılım ve Danışmanlık</p>
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
