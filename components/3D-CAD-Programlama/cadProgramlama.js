import React from "react";
import Link from "next/link";
import styles from "./cadprogramlama.module.css";
import Image from "next/image";

const cadProgramlama = () => {
  return (
    <div className="w-full pt-[88px] listimage">
      <div className="w-full">
        <img
          src="/assets/Images/3D-banner.png"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="">
          <div className="lg:mb-12 mb-6">
            <h2 className="text-center lg:mb-2 mb-1 lg:text-3xl text-2xl font-bold">
              İleri Seviye CAD Çözümleriyle İşinizin Geleceğini Şekillendirin!
            </h2>
            <h3 className="text-center font-bold italic">
              &quot;Akıllı CAD Çözümleri İçin Yenilikçi ve İleri Düzey 2D/3D
              Modelleme Yazılımlarıyla Sınırları Zorlayın!&quot;
            </h3>
          </div>

          <ol className="lg:pb-3 pb-2">
            <p className="font-bold py-3">Yapabileceklerimiz</p>
            <li>
              3 boyutlu modellemenin manuel olarak kullanıcı tarafından en rahat
              şekilde yapılabilmesini sağlamak.
            </li>
            <li>
              Birlikte çalışılması gereken programlardan veya manuel olarak
              hazırlanmış dosyalardan elde edilen verilerin otomatik 3 boyutlu
              model haline getirilmesini sağlamak.
            </li>
            <li>
              Model içerisinde bulunan elemanlara veri atamasını, verilerin
              görsel olmayan tablolar halinde yönetilmesi yerine hazırlanan
              model üzerinden yönetilmesini sağlamak.
            </li>
            <li>
              Elde edilen verilerle gerekli analizler yapmak, özelleştirilmiş
              tablolar haline getirmek ve istenen çıktıları elde edip metin,
              tablo veya çizim olarak kaydedilmesini sağlamak.
            </li>
            <li>
              Kullanıcıların ihtiyaçlarına özel arayüz oluşturarak,
              kullanıcıların daha etkili bir çalışma deneyimi sunmasını
              sağlamak.
            </li>
          </ol>
          <p className="font-bold pt-6 pb-4">
            Neden 3D CAD Tabanlı Butik Yazılım?
          </p>
          <p className="lg:pb-3 pb-2">
            <span className="font-bold underline">
              Özelleştirilmiş Çözümler:{" "}
            </span>
            Her sektör ve her proje farklıdır. Standart yazılımlar genellikle
            spesifik gereksinimleri karşılamakta yetersiz kalabilir. Butik
            yazılımlar, müşterilerimizin benzersiz ihtiyaçlarına yönelik
            özelleştirilmiş çözümler sunar.
          </p>
          <p className="lg:pb-3 pb-2">
            <span className="font-bold underline">
              Performans ve Verimlilik:{" "}
            </span>
            Genel kullanım amaçlı yazılımların aksine, butik yazılımlar belirli
            bir endüstri veya projeye odaklanarak daha yüksek performans ve
            verimlilik sunabilir. Bu da projelerin daha hızlı tamamlanmasını ve
            maliyet tasarruflarını beraberinde getirir.
          </p>
          <p className="pb-10">
            <span className="font-bold underline">
              Teknoloji Trendlerine Hızlı Adaptasyon:{" "}
            </span>
            Butik yazılım geliştirme, sektördeki güncel teknoloji trendlerine
            hızlı bir şekilde adapte olma esnekliği sağlar. Bu da
            müşterilerimizin rekabet avantajını artırmasına yardımcı olur.
          </p>
          <p className="pb-2 lg:w-2/3 text-center mx-auto">
            Siz de bizimle birlikte çalışarak size özel geliştirilecek 3 boyutlu
            CAD tabanlı uygulamalarla projelerinizi daha yüksek bir seviyeye
            taşıyabilir ve endüstri normlarını aşabilirsiniz.
          </p>
          <p className="pb-2 lg:w-2/3 text-center mx-auto italic">
            Projelerinizle ilgili bizimle
            <span className="text-blue-500">
              <Link href="/contact"> iletişime geçin</Link>
            </span>
            .
          </p>
        </div>
        <div className="lg:mt-10">
          <h3 className="border-b border-blue-500 my-3 font-bold text-2xl text-center pb-2">
            CAD Çözümleme Uygulamalarımız
          </h3>
          <div className="gap-5 lg:grid grid-cols-2">
            <div className={styles.card}>
              <div className={styles.card_black}>
                <Image
                  src="/assets/Images/3D-CAD.png"
                  alt="Fizibil İskele Analiz"
                  className={styles.card_images}
                  width={350}
                  height={350}
                />
              </div>
              <div className={styles.card_gray}>
                <div className={styles.card_line}></div>
                <h3 className={styles.card_title}>Fizibil İskele Analiz</h3>
                <p className="lg:my-6 my-4">
                  İnşaat mühendislerinin kullanımı için cephe iskelelerinin 3
                  boyutlu modellenmesi, statik analizi, raporlanması ve proje
                  paftalarının dwg formatında otomatik hazırlanması için
                  geliştirilmiş paket program
                </p>
                <Link href="/iskele" className={styles.card_button}>
                  <span className={styles.card_button_title}>KEŞFEDİN!</span>
                  <Image
                    src="/assets/icons/right-sm.svg"
                    width={20}
                    height={20}
                    alt="right"
                  />
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_gray}>
                <div className={styles.card_line}></div>
                <h3 className={styles.card_title}>Fizibil Yığma Analiz</h3>
                <p className="lg:my-6 my-4">
                  İnşaat mühendislerinin kullanımı için Yığma binaların
                  TBDY2018&apos;e göre tasarlanması, performans analizlerinin
                  yapılması ve RBYBHY&apos;e göre risk analizlerinin yapılması
                  (3 boyutlu modellenmesi, statik-dinamik analizi, raporlanması
                  ve proje paftalarının dwg formatında otomatik hazırlanması)
                  için paket program
                </p>
                <Link href="/yigma" className={styles.card_button}>
                  <span className={styles.card_button_title}>KEŞFEDİN!</span>
                  <Image
                    src="/assets/icons/right-sm.svg"
                    width={20}
                    height={20}
                    alt="right"
                  />
                </Link>
              </div>
              <div className={styles.card_black}>
                <Image
                  src="/assets/Images/yıgma.png"
                  alt="Fizibil Yığma Analiz"
                  className={styles.card_images}
                  width={350}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cadProgramlama;
