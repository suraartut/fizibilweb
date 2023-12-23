import React from "react";
import styles from "./ayakanaliz.module.css";
import Image from "next/image";

const AyakAnaliz = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/pagebanner.jpg"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="lg:mb-12 mb-6">
          <h2 className="text-center lg:mb-2 mb-1 lg:text-3xl text-2xl font-bold">
            Magenta Ayak Analizi Çözümlemesi
          </h2>
          {/* <h3 className="text-center font-bold italic">
              Sıradanlığı Unutun, Biz Dijital Maceranın Kahramanlarıyız!
            </h3> */}
        </div>
        <div className="lg:flex gap-16">
          <div>
            <Image
              className="mx-auto"
              src="/assets/Images/Magenta-1.png"
              alt="Ayak Analiz Telif"
              width={650}
              height={600}
            />
          </div>
          <div className="">
            <p className="mb-2">
              Ayaklarda bulunan ortopedik sorunların daha hızlı belirlenip
              raporlanabilmesi için doktor incelemesine sunulmak ve ayak
              tabanlığı üretim atölyesine gönderilmek üzere belge hazırlayan bir
              bilgisayar programı geliştirilmiştir.
            </p>
            <ol>Masaüstünde kullanılmak üzere hazırlanan bu uygulama ile;</ol>
            <li>
              Hastalarının ayak tabanı ve ayak bilek fotoğrafları programa
              yüklenebilir veya program yardımıyla fotoğrafları
              çekilebilir/taranabilir.
            </li>
            <li>
              Bu fotoğraflar üzerinde çizme araçları kullanılarak ilgili açı ve
              uzunluk bilgilerinin belirlenmesi ile hastanın ayak problemleri
              ile ilgili tanı koyulabilir.
            </li>
            <li>
              Önceden tanımlı taban bilek sorunlarını ile ilgili rapor
              oluşturabilir.
            </li>
            <li>
              Oluşturulan rapor ile hastaya özel üretilecek ayakkabı tabanlığı
              için gerekli bilgiler belge haline getirilebilir.
            </li>
          </div>
        </div>
        <div className="lg:mt-8">
          <h3 className="font-bold text-center">
            Magenta Ayak Analiz Tescil Belgemiz
          </h3>
          <Image
            className="mx-auto"
            src="/assets/Images/ayak-analiz-telif.jpg"
            alt="Ayak Analiz Telif"
            width={250}
            height={380}
          />
        </div>
      </div>
    </div>
  );
};

export default AyakAnaliz;
