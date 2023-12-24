import React from "react";
import styles from "./ayakanaliz.module.css";
import Image from "next/image";

const AyakAnaliz = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/ayakanaliz.png"
          className="w-full lg:h-[50vh] h-[13vh] object-cover"
          alt="Ayak Analiz"
        />
      </div>
      <div className="w-full my-5">
        <div className="lg:container lg:mx-auto mx-5">
          <div className="lg:flex gap-16 items-center">
            <div className="lg:mt-8 lg:block hidden">
              <Image
                className="mx-auto"
                src="/assets/Images/ayak-analiz-telif.jpg"
                alt="Ayak Analiz Telif"
                width={350}
                height={480}
              />
              <p className="font-bold text-center italic text-sm">
                Magenta Ayak Analiz Tescil Belgemiz
              </p>
            </div>
            <div className="">
              <div className="lg:mb-12 mb-3 lg:mt-0 mt-5">
                <h2 className="text-center lg:text-3xl text-2xl font-bold">
                  Magenta Ayak Analizi Çözümlemesi
                </h2>
                {/* <h3 className="text-center font-bold italic">
              Sıradanlığı Unutun, Biz Dijital Maceranın Kahramanlarıyız!
            </h3> */}
              </div>
              <div className="lg:ml-10">
                <p className="mb-3">
                  Ayaklarda bulunan ortopedik sorunların daha hızlı belirlenip
                  raporlanabilmesi için doktor incelemesine sunulmak ve ayak
                  tabanlığı üretim atölyesine gönderilmek üzere belge hazırlayan
                  bir bilgisayar programı geliştirilmiştir.
                </p>
                <ol className="list-disc list-inside">
                  Masaüstünde kullanılmak üzere hazırlanan bu uygulama ile;
                  <li className="mt-2">
                    Hasta bilgilerinin yer aldığı hasta kartları
                    oluşturulabilir.
                  </li>
                  <li>
                    Hastalarla ilişkili olarak birden fazla muayene eklenebilir
                    ve bu şekilde hasta ve muayene bilgileri kayıt altında
                    tutulabilir.
                  </li>
                  <li>
                    Muayene bilgileri eklenirken hastalarının ayak tabanı ve
                    ayak bilek fotoğrafları programa yüklenebilir veya program
                    yardımıyla fotoğrafları çekilebilir/taranabilir.
                  </li>
                  <li>
                    Bu fotoğraflar üzerinde çizme araçları kullanılarak ilgili
                    açı ve uzunluk bilgilerinin belirlenmesi ile hastanın ayak
                    problemleri ile ilgili tanı koyulabilir.
                  </li>
                  <li>
                    Önceden tanımlı taban bilek sorunlarını ile ilgili rapor
                    oluşturabilir.
                  </li>
                  <li>
                    Oluşturulan rapor ile hastaya özel üretilecek ayakkabı
                    tabanlığı için gerekli bilgiler belge haline getirilebilir.
                  </li>
                </ol>
              </div>
            </div>
            <div className="lg:hidden block mt-2">
              <Image
                className="mx-auto"
                src="/assets/Images/ayak-analiz-telif.jpg"
                alt="Ayak Analiz Telif"
                width={250}
                height={380}
              />
              <p className="font-bold text-center italic text-sm">
                Magenta Ayak Analiz Tescil Belgemiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyakAnaliz;
