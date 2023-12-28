import React from "react";
import styles from "./masaustu.module.css";
import Image from "next/image";
import Link from "next/link";

const Masaustu = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/Masaüstü-banner.png"
          className="w-full lg:h-auto h-[15vh]"
          alt="Masaüstü Programlama"
        />
      </div>
      <div className="w-full lg:my-10 my-6">
        <div className="lg:container lg:mx-auto mx-5">
          <div className="">
            <div className="items-center lg:text-lg">
              <div>
                <div className="lg:mb-4 mb-2">
                  <h2 className="text-center lg:mb-2 mb-1 lg:text-3xl text-2xl font-bold">
                    Masaüstü Programlamada Lider Çözümler Sunuyoruz!
                  </h2>
                  {/* <h3 className="text-center font-bold text-xl">
                    <code>
                      <span className="text-blue-700">&lt;code&gt;</span>
                      <span className="italic"> Masaüstü Programlama </span>
                      <span className="text-blue-700">&lt;/code&gt;</span>
                    </code>
                  </h3> */}
                </div>
                <div>
                  <p className="lg:pb-3 pb-2">
                    Şirketimiz, masaüstü programlama konusunda uzmanlaşmış ve
                    çeşitli sektörler için özel çözümler sunan bir teknoloji
                    lideridir. İşletmelerin ve bireylerin ihtiyaçlarına yönelik
                    özelleştirilmiş masaüstü uygulamalar geliştirerek,
                    verimliliği artırıyor ve iş süreçlerini optimize ediyoruz.
                  </p>
                  {/* <p className="font-bold lg:py-3 py-2">
                    İletişime Geçin ve İşinize Değer Katın!
                  </p>
                  <p className="lg:pb-3 pb-2">
                    Masaüstü programlama alanında başarılı projelerimize göz
                    atın. Siz de işinizi daha verimli hale getirmek ve özel
                    çözümlerle büyümek istiyorsanız, bizimle iletişime geçin.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="lg:my-10 my-4 lg:flex gap-16">
              <div className="lg:flex hidden">
                <Image
                  src="/assets/Images/masaustu-uygulama2.jpg"
                  width={1000}
                  height={1000}
                  alt="Masaüstü Uygulama ve Programlama"
                />
              </div>
              <div className="lg:hidden block mb-3">
                <Image
                  className="mx-auto"
                  src="/assets/Images/masaustu-uygulama2.jpg"
                  width={350}
                  height={350}
                  alt="Masaüstü Uygulama ve Programlama"
                />
              </div>
              <div>
                <h2 className="lg:mb-3 mb-1 lg:text-2xl text-xl font-bold">
                  Masaüstü Uygulamalarımızın Sunduğu Değerler:
                </h2>
                <p className="pt-1 pb-1 font-bold">İhtiyaca Özel Çözümler:</p>
                <p className="lg:pb-4 pb-2">
                  Her iş benzersizdir ve biz de bu bilinçle hareket ediyoruz. İş
                  ihtiyaçlarınıza uygun, özel olarak tasarlanmış masaüstü
                  uygulamalar geliştiriyoruz. Her sektörde ve ölçekte işletme
                  için ideal çözümler sunuyoruz.
                </p>
                <p className="pb-1 font-bold">Güvenlik Odaklı Çözümler:</p>
                <p className="lg:pb-4 pb-2">
                  Müşterilerimizin verilerini en üst düzeyde korumak için
                  güvenlik standartlarına uygun uygulamalar geliştiriyoruz.
                  Hassas verilerinizi güvende tutmanın önemini biliyoruz.
                  Geliştirdiğimiz uygulamalar, en yüksek güvenlik standartlarına
                  uygun olarak tasarlanır ve mevcut sistemlerinizle sorunsuz
                  entegre olur.
                </p>
                <p className="pb-1 font-bold">Kullanıcı Dostu Arayüzler:</p>
                <p className="lg:pb-4 pb-2">
                  Masaüstü uygulamalarımız, kullanıcı dostu arayüzleriyle dikkat
                  çeker. Kolay kullanım ve etkileşim, müşteri memnuniyetini
                  artırır ve kullanıcı deneyimini iyileştirir.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold py-2 text-center italic">
              İletişime Geçin ve İşinize Değer Katın!
            </p>
            <p className="pb-2 lg:w-[40%] text-center mx-auto">
              Masaüstü programlama alanında başarılı projelerimize göz atın. Siz
              de işinizi daha verimli hale getirmek ve özel çözümlerle büyümek
              istiyorsanız, bizimle iletişime geçin.
            </p>
          </div>
          <div className="lg:mt-10">
            <h3 className="border-b border-blue-500 my-3 font-bold text-2xl text-center pb-2">
              Masaüstü Programlama Çözümlerimiz
            </h3>
            <div className="lg:grid grid-cols-3 gap-12">
              <div className={styles.card}>
                <div className={styles.card_black}>
                  <Image
                    src="/assets/Images/iskele-multi.png"
                    alt="Doğalgaz Sayacı Okuma Uygulaması"
                    className={styles.card_images}
                    width={640}
                    height={344}
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
                <div className={styles.card_black}>
                  <Image
                    src="/assets/Images/yıgma.png"
                    alt="Elektrik Sayacı Okuma Uygulaması"
                    className={styles.card_images}
                    width={384}
                    height={329}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>Fizibil Yığma Analiz</h3>
                  <p className="lg:my-6 my-4">
                    İnşaat mühendislerinin kullanımı için Yığma binaların
                    TBDY201&apos;e göre tasarlanması, performans analizlerinin
                    yapılması ve RBYBHY&apos;e göre risk analizlerinin yapılması
                    (3 boyutlu modellenmesi, statik-dinamik analizi,
                    raporlanması ve proje paftalarının dwg formatında otomatik
                    hazırlanması) için paket program
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
              </div>
              <div className={styles.card}>
                <div className={styles.card_black}>
                  <Image
                    src="/assets/Images/Magenta-1.png"
                    alt="Statik Proje Bedeli Hesaplama"
                    className={styles.card_images}
                    width={384}
                    height={294}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>Magenta Ayak Analizi</h3>
                  <p className="lg:my-6 my-4">
                    Ayaklarda bulunan ortopedik sorunların daha hızlı belirlenip
                    raporlanabilmesi için doktor incelemesine sunulmak ve ayak
                    tabanlığı üretim atölyesine gönderilmek üzere belge
                    hazırlayan bir bilgisayar programı geliştirilmiştir.
                  </p>
                  <Link href="/ayak-analiz" className={styles.card_button}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masaustu;
