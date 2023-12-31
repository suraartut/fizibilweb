import React from "react";
import styles from "./goruntu.module.css";
import Link from "next/link";
import Image from "next/image";

const goruntuIsleme = () => {
  return (
    <div className="w-full pt-[88px] listimage">
      <div className="w-full">
        <img
          src="/assets/Images/goruntu-isleme-banner.png"
          className="w-full lg:h-auto h-full"
          alt="Sayaç Okuma"
        />
      </div>
      <div className="lg:container lg:mx-auto mx-5 mt-5">
        <h3 className="text-center font-bold italic">
          Yapay zeka alanında yaptığımız çeşitli bilimsel araştırmalarımızı
          sektörün genelinin ihtiyaçlarına yönelik olarak sonuç ürünlere
          dönüştürüyoruz.
        </h3>
        <div className="my-8">
          <p className="lg:pb-3 pb-2">
            Bilgisayarlı Görü, insanın görsel sisteminin yapabileceği görevleri
            anlamaya ve otomatikleştirmeye çalışır. Dijital görüntülerin elde
            edilerek işlenmesi ve analizini gerçekleştirerek gerçek dünyadan
            sayısal veya sembolik bilgileri çıktı olarak elde edebiliyoruz.
            Bilgisayarlı görü ile görüntü işleme firmamız tarafından iki farklı
            teknoloji ile yapılmaktadır.
          </p>
          <div className="lg:flex justify-between">
            <div>
              <p className="font-bold lg:py-3 py-2">
                Uygulama Programlama Arayüzü (API)
              </p>
              <ul className="lg:pb-3 pb-2">
                <li>
                  Dijital fotoğraf sunucuya yollanır ve sunucuda analiz edilir.
                </li>
                <li>
                  Sunucu tarafında analiz edilen fotoğraftaki seri numarası ve
                  endeks değerleri istemciye döndürülür.
                </li>
                <li>Okuma için aktif internet bağlantısı gereklidir.</li>
                <li>
                  Okuma hızı performansı internet bağlantısının hızına bağlıdır.
                </li>
                <li>
                  Sayaç görseli veri olarak sunucuya POST edildiğinden veri
                  boyutu yüksek, sunucu yükü fazladır.
                </li>
              </ul>
              <p className="font-bold lg:py-3 py-2">
                Yerel Mobil Uygulamalar (Native)
              </p>
              <ol className="goruntu-isleme lg:pb-3 pb-2">
                <li>
                  Dijital fotoğraf direk olarak mobil cihaz üzerinde analiz
                  edilir.
                </li>
                <li>
                  Native olarak analiz edilen fotoğraftaki seri numarası ve
                  endeks değerleri direkt olarak kullanıcıya döndürülür.
                </li>
                <li>Okuma için aktif internet bağlantısına gerek yoktur.</li>
                <li>
                  Okuma hızı performansı internet bağlantısının hızına bağlı
                  değildir.
                </li>
                <li>
                  Sayaç görseli mobil cihazda yerel olarak analiz edildiğinden
                  sunucuya yalnızca dönen sonuçlar POST edilir sunucu yükü
                  azdır.
                </li>
              </ol>
            </div>
            <div className="flex">
              <div className="mx-auto">
                <Image
                  src="/assets/Images/goruntu-isleme-1.png"
                  width={190}
                  height={190}
                  alt="Görüntü İşleme API"
                />
              </div>
              <div className="mx-auto">
                <Image
                  src="/assets/Images/goruntu-isleme-2.png"
                  width={350}
                  height={350}
                  alt="Görüntü İşleme API"
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="border-b border-blue-500 my-3 font-bold text-2xl text-center pb-2">
          Görüntü İşleme Uygulamalarımız
        </h3>
        <div className={styles.card}>
          <div className={styles.card_black}>
            <img
              src="/assets/Images/dogalgaz-sayac.png"
              alt="Doğalgaz Sayacı"
              className={styles.card_images}
            />
          </div>
          <div className={styles.card_gray}>
            <div className={styles.card_line}></div>
            <h3 className={styles.card_title}>Doğalgaz Sayacı Okuma</h3>
            <p className="lg:my-6 my-4">
              Enerjinizi daha etkili ve verimli bir şekilde yönetmek için şimdi
              doğalgaz sayacınızı takip etme zamanı geldi! Fizibil olarak, sizin
              için geliştirdiğimiz kullanıcı dostu doğalgaz sayacı okuma
              uygulamamızla, tüketiminizi anında kontrol altına alabilir,
              tasarruf yapabilir ve çevreye daha duyarlı bir şekilde enerji
              kullanabilirsiniz.
            </p>
            <Link href="/dogalgaz-sayac" className={styles.card_button}>
              <span className={styles.card_button_title}>
                Daha İYİ BİR Gelecek İÇİN ŞİMDİ Adım Atın!
              </span>
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
            <h3 className={styles.card_title}>Elektrik Sayacı Okuma</h3>
            <p className="lg:my-6 my-4">
              Enerjinizi anında takip etmek ve tasarruf yapmak hiç bu kadar
              kolay olmamıştı! Fizibil olarak, geliştirdiğimiz elektrik sayacı
              okuma uygulamamızla, elektrik tüketiminizi hızlı ve etkili bir
              şekilde yönetebilirsiniz.
            </p>
            <Link href="/elektrik-sayac" className={styles.card_button}>
              <span className={styles.card_button_title}>
                Daha Akıllı Enerjİ YönetİMİ İÇİN ŞİMDİ Harekete Geçİn!
              </span>
              <Image
                src="/assets/icons/right-sm.svg"
                width={20}
                height={20}
                alt="right"
              />
            </Link>
          </div>
          <div className={styles.card_black}>
            <img
              src="/assets/Images/elektrik-sayac.png"
              alt="Elektrik Sayacı"
              className={styles.card_images}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default goruntuIsleme;
