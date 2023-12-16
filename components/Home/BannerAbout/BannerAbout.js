import React from "react";
import styles from "./bannerabout.module.css";
import Link from "next/link";
import Image from "next/image";

const BannerAbout = () => {
  return (
    <div className={styles.banner_about} data-aos="fade-left">
      <div className="lg:text-center">
        <h3 className={styles.title_h3}>
          AKADEMİK BİLGİ VE TECRÜBE İLE REEL SEKTÖRDE
        </h3>
        <h2 className={styles.title_h2}>Fizibil Mühendislik & Yazılım</h2>
        <p className={styles.paragraph}>
          Farklı mühendislik disiplinlerini bir arada kullanarak etkin çözümler
          üreten ve mevcut çözümlemeleri de daha ileri bir noktaya taşımayı
          hedefleyen firmamız; 3D CAD yazılımları, makina öğrenme temelli
          görüntü işleme yazılımları, multilevel marketing özellikli e-ticaret
          yazılımları, ERP yazılımları, SAP NonSAP yazılım ve danışmanlık
          hizmetleri, masaüstü, web ve mobil platformlar gibi geniş bir
          yelpazede proje ve hizmet sunmaktadır.
        </p>
      </div>
      <div className="lg:mt-16">
        <div className={styles.card}>
          <div className={styles.card_gray}>
            <div className={styles.card_line}></div>
            <h3 className={styles.card_title}>
              Makine Öğrenmesi ve Görüntü İşleme ile Mobil Sayaç Okuma
            </h3>
            <p className="lg:my-6 my-4">
              Yapay zeka alanında yaptığımız çeşitli bilimsel araştırmalarımızı,
              sektörün ihtiyaçlarına yönelik olarak sonuç ürünlere
              dönüştürüyoruz. Dijital görüntülerin elde edilerek işlenmesini ve
              analizini gerçekleştirerek gerçek dünyadan sayısal veya sembolik
              bilgileri çıktı olarak elde edebiliyoruz.
            </p>
            <Link href="/goruntu-isleme" className={styles.card_button}>
              <span className={styles.card_button_title}>Keşfedİn</span>
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
              src="/assets/Images/sayac-okuma.png"
              alt="Görüntü İşleme"
              className={styles.card_images}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_black}>
            <img
              src="/assets/Images/3D-CAD.png"
              alt="3D CAD Programlama"
              className={styles.card_images}
            />
          </div>
          <div className={styles.card_gray}>
            <div className={styles.card_line}></div>
            <h3 className={styles.card_title}>
              CAD Tabanlı 2D/3D Modelleme Yazılımları Geliştirme
            </h3>
            <p className="lg:my-6 my-4">
              Yığma bina 3D tasarım ve statik/dinamik analiz yazılımı, İskele 3D
              tasarım ve statik analiz yazılımı, Hafif çelik yapıların 3D
              tasarım ve statik/dinamik analiz yazılımı, 3D CBS, Model
              görüntüleyiciler vb.
            </p>
            <Link href="/3d-cad-programlama" className={styles.card_button}>
              <span className={styles.card_button_title}>Keşfedİn</span>
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
            <h3 className={styles.card_title}>
              Web Uygulamaları ve MLM E-ticaret Sitesi
            </h3>
            <p className="lg:my-6 my-4">
              Sınırları aşan dijital deneyimlere hoş geldiniz! Modern ve
              etkileyici web siteleriyle çevrimiçi varlığınızı güçlendiriyoruz.
              Dijital hikayeler yaratmaktan ve projeleri hayata geçirmekten daha
              çok, birer dijital maceranın kahramanları olmaktan keyif alıyoruz.
              Bizimle birlikte, kodları sanat eserine dönüştürün, çünkü dijital
              dünya sizi bekliyor!
            </p>
            <Link href="/web-uygulama" className={styles.card_button}>
              <span className={styles.card_button_title}>
                Sİz de bİzİmle bİrlİkte bu dİjİtal maceraya katılın!
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
              src="/assets/Images/e-tic.png"
              alt="E-ticaret"
              className={styles.card_images}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_black}>
            <img
              src="/assets/Images/foto.png"
              alt="ERP"
              className={styles.card_images}
            />
          </div>
          <div className={styles.card_gray}>
            <div className={styles.card_line}></div>
            <h3 className={styles.card_title}>ERP</h3>
            <p className="lg:my-6 my-4">Açıklama</p>
            <Link href="/erp" className={styles.card_button}>
              <span className={styles.card_button_title}>Keşfedİn</span>
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
  );
};

export default BannerAbout;
