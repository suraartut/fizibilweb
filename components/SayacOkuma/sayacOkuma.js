import React from "react";
import styles from "./sayac.module.css";
import Image from "next/image";

const sayacOkuma = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/sayac-okuma-banner.png"
          className={styles.banner}
          alt="Sayaç Okuma"
        />
      </div>
      <div className={styles.body}>
        <div className="lg:mx-32 mx-5">
          {/* <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            Sayaç Okuma Sistemi
          </h2> */}
          <p className="text-lg lg:pt-10 lg:pb-4">
            Yapay zeka alanında yaptığımız çeşitli bilimsel araştırmalarımızı,
            sektörün ihtiyaçlarına yönelik olarak sonuç ürünlere dönüştürüyoruz.
            Dijital görüntülerin elde edilerek işlenmesini ve analizini
            gerçekleştirerek gerçek dünyadan sayısal veya sembolik bilgileri
            çıktı olarak elde edebiliyoruz. Tarafımızca geliştirilen yapay zekâ
            ve görüntü işleme yazılımları ile tüm mobil cihazlar (Android ve
            iOS), doğalgaz ve elektrik sayaçlarının endeks ve sayaç seri
            numarasını içeren barkod bilgisiyle, kamera akışından otomatik
            olarak anlık okuma yapabilecek ve endeksör cihazların yerine
            kullanılabilecektir.
          </p>
          <div className={styles.sayac}>
            <div className={styles.images}>
              <img
                src="/assets/Images/dogalgaz-sayac.png"
                alt="Doğalgaz Sayaç Okuma"
              />
            </div>
            <div className="col-span-2">
              <h3 className={styles.titles}>Doğalgaz Sayacı</h3>
              <p className="lg:text-lg">Açıklama</p>
            </div>
          </div>
          <div className={styles.sayac}>
            <div className="col-span-2">
              <h3 className={styles.titles}>Elektrik Sayacı</h3>
              <p className="lg:text-lg">
                Sayaçtan alınması gereken değerler gün içinde bile zamanlara
                bölünmektedir, haftasonu tüketimleri ve enerji ölçüm cinsinin de
                işin içine girmesiyle okuyucunun iş yükü ve hata yapma olasılığı
                artmaktadır. Saha elemanları bu uygulamayı kullanarak, personel
                hesapları üzerinden, gerekli görüldüğü taktirde okuma
                yapabileceklerdir. Diğer taraftan uygulama sayesinde Endeksör
                cihaz maliyetlerinin, akıllı telefonlarla azaltılabileceği
                öngörülmektedir. Uygulama sayesinde saha elemanları hızlı bir
                şekilde okumalarını gerçekleştirebilir ve bilgileri ilgili
                şirket sunucusu ile kısa sürede elindeki akıllı telefon
                yardımıyla başka hiçbir ek cihaza gerek kalmadan paylaşabilir.
                Böylece zaman ve saha için istihdam edilen personelden tasarruf
                sağlanabilir.
              </p>
            </div>
            <div className={styles.images}>
              <img
                src="/assets/Images/elektrik-sayac.png"
                alt="Elektrik Sayaç Okuma"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sayacOkuma;
