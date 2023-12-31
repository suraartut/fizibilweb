import React from "react";
import Image from "next/image";
import styles from "./web.module.css";
import Link from "next/link";

const Web = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/web-program-banner.png"
          className="w-full lg:h-auto h-full"
          alt="Web Programlama"
        />
      </div>
      <div className="w-full lg:my-10 my-6">
        <div className="lg:container lg:mx-auto mx-5">
          <div>
            <div className="lg:mb-12 mb-6">
              <h2 className="text-center lg:mb-2 mb-1 lg:text-3xl text-2xl font-bold">
                &quot;Kodun Gücüyle Dijital Hikayeler Yaratıyoruz!&quot;
              </h2>
              <h3 className="text-center font-bold italic">
                Sıradanlığı Unutun, Biz Dijital Maceranın Kahramanlarıyız!
              </h3>
            </div>
            <div className="lg:flex gap-24 items-center">
              <div className="lg:flex hidden">
                <Image
                  src="/assets/Images/web-responsive.jpg"
                  width={1450}
                  height={1450}
                  alt="Web Uygulama ve Programlama"
                />
              </div>
              <div className="lg:hidden block mb-3">
                <Image
                  className="mx-auto"
                  src="/assets/Images/web-responsive.jpg"
                  width={350}
                  height={350}
                  alt="Web Uygulama ve Programlama"
                />
              </div>
              <div>
                <p className="lg:pb-3 pb-2">
                  Sınırları aşan dijital deneyimlere hoş geldiniz! Biz,
                  geleceğin kodlarına şekil veren bir şirketiz. Sadece web
                  siteleri yapmıyor, geleceği programlıyoruz. Web programlama
                  konusunda sınırları zorlayan ekibimizle, projelerinizi sadece
                  bir adrese değil, bir dijital serüvene taşıyoruz. Bizimle
                  birlikte, kodları sanat eserine dönüştürün, çünkü dijital
                  dünya sizi bekliyor!
                </p>
                <p className="font-bold lg:py-3 py-2">Biz Kimiz?</p>
                <p className="lg:pb-3 pb-2">
                  Biz, sadece bir yazılım şirketi değil, çözüm ortağınızız.
                  Projenizin her aşamasında yanınızdayız. Sizi anlıyor,
                  ihtiyaçlarınıza özel çözümler üretiyor ve en son teknolojileri
                  kullanarak sizi rakiplerinizin önüne geçiriyoruz. Sıradanlığı
                  reddediyoruz ve rutin projeleri unutun diyoruz. Vizyonumuz,
                  sadece web siteleri değil, aynı zamanda kullanıcı deneyimini
                  ve iş sonuçlarını optimize etmek üzerine odaklanıyor. Bu
                  yolda, sizinle birlikte yeni dijital destanları yazmak için
                  buradayız.
                </p>
              </div>
            </div>
            <div className="lg:my-10 my-4">
              <h2 className="lg:mb-3 mb-1 lg:text-2xl text-xl font-bold">
                Bizimle Geleceği Şekillendirin, Hizmetlerimizle Tanışın!
              </h2>
              <p className="pt-1 pb-1 font-bold">
                Web Programlama - Sanatla Kodları Buluşturun:
              </p>
              <p className="lg:pb-4 pb-2">
                Sıradan web sitelerinden çok daha fazlasını arzuluyorsanız, işte
                buradayız! Web programlama alanındaki uzmanlığımızla, her bir
                proje bir sanat eserine dönüşüyor. Tarzınıza uygun, etkileyici
                ve işlevsel web siteleri için bizi tercih edin.
              </p>
              <p className="pb-1 font-bold">
                Mobil App Sihirbazlığı - Dijital Dünyada Büyü Yaratın:
              </p>
              <p className="lg:pb-4 pb-2">
                Mobil uygulamalar, işinizi bir adım öne taşımanın anahtarıdır.
                Deneyimli mobil app geliştirme ekibimizle, kullanıcılarınızın
                cezbolacağı uygulamaları hayata geçiriyoruz. Sadece bir uygulama
                değil, dijital bir başyapıt için bizimle çalışın.
              </p>
              <p className="pb-1 font-bold">
                Özel Yazılım Partisi - İhtiyacınıza Özel Çözümler:
              </p>
              <p className="lg:pb-4 pb-2">
                Her iş farklıdır, bu yüzden ihtiyaçlarınıza özel çözümler
                sunuyoruz. İş süreçlerinizi optimize etmek ve işinizi
                hızlandırmak için özel yazılımlarımızla tanışın. Standartları
                aşın, çünkü biz özel çözümler üretiyoruz.
              </p>
              <p className="pb-1 font-bold">
                Dijital Strateji Kılavuzluğu - Başarıya Giden Yolda Rehberiniz:
              </p>
              <p className="lg:pb-6 pb-3">
                Dijital dünyada kaybolmak istemiyorsanız, size yol gösteriyoruz.
                Dijital strateji danışmanlığı hizmetimizle, online varlığınızı
                güçlendirmek, hedef kitlenizi genişletmek ve rekabette öne
                çıkmak için birlikte çalışabiliriz.
              </p>
              <p className="font-bold py-2 text-center italic">
                Daha Fazla İnovasyon, Daha Fazla Etki!
              </p>
              <p className="pb-2 lg:w-[40%] text-center mx-auto">
                İşte size sunulan sadece birkaç örnek! Bizimle çalışarak,
                sınırları aşan, etkileyici ve inovatif dijital çözümlerle
                tanışın. Geleceği birlikte şekillendirelim!
              </p>
            </div>
          </div>
          <div className="lg:mt-10">
            <h3 className="border-b border-blue-500 my-3 font-bold text-2xl text-center pb-2">
              Web Çözümlerimiz
            </h3>
            <div className="lg:grid grid-cols-3 gap-12">
              <div className={styles.card}>
                <div className={styles.card_black}>
                  <Image
                    src="/assets/Images/ERP-rapor.png"
                    alt="ERP Yazılım ve Danışmanlık"
                    className={styles.card_images}
                    width={384}
                    height={329}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>
                    ERP Yazılım ve Danışmanlık
                  </h3>
                  <p className="lg:my-6 my-4">
                    Şirketimiz, iş süreçlerinizi optimize etmek ve verimliliği
                    artırmak için özel olarak tasarlanmış ERP yazılım ve
                    danışmanlık çözümleri sunmaktadır. İşletmenizin
                    ihtiyaçlarına özel olarak uyarlanabilen bu çözümlerle iş
                    süreçlerinizi daha etkili hale getirebilir, kaynakları
                    yönetebilir ve rekabet avantajınızı artırabilirsiniz.
                  </p>
                  <Link href="/erp" className={styles.card_button}>
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
                    src="/assets/Images/e-tic.png"
                    alt="MLM Özellikli E-ticaret Portalı"
                    className={styles.card_images}
                    width={371}
                    height={281}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>
                    MLM Özellikli E-ticaret Portalı
                  </h3>
                  <p className="lg:my-6 my-4">
                    E-ticaret dünyasında öne çıkmak için tasarlanmış MLM
                    özellikli e-ticaret portalımız ile satış stratejilerinizi
                    güçlendirin. Geniş ürün yelpazesi, etkili ödeme sistemleri
                    ve çok seviyeli pazarlama (MLM) entegrasyonu ile işinizi
                    daha da büyütmenize yardımcı oluyoruz.
                  </p>
                  <Link href="/e-ticaret" className={styles.card_button}>
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
                    src="/assets/Images/kentsel-donusum.png"
                    alt="Kentsel Dönüşüm Bilgi Sistemi"
                    className={styles.card_images}
                    width={384}
                    height={189}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>
                    Kentsel Dönüşüm Bilgi Sistemi
                  </h3>
                  <p className="lg:my-6 my-4">
                    Kentsel dönüşüm projelerinizi daha etkili bir şekilde
                    yönetmek ve bilgi akışını optimize etmek için tasarlanmış
                    Kentsel Dönüşüm Bilgi Sistemi ile tanışın. Şirketimiz,
                    inşaat sektöründe uzmanlaşmış ve kentsel dönüşüm süreçlerini
                    kolaylaştırmayı hedeflemiştir.
                  </p>
                  <Link href="/kentsel-donusum" className={styles.card_button}>
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

export default Web;
