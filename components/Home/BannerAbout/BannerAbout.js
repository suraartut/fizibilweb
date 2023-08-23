import React from "react";
import styles from "./bannerabout.module.css";
import Link from "next/link";
import Image from "next/image";

const BannerAbout = () => {
  return (
    <div className={styles.banner_about}>
      <div className="lg:text-center">
        <h3 className={styles.title_h3}>
          AKADEMİK BİLGİ VE TECRÜBE İLE REEL SEKTÖRDE
        </h3>
        <h2 className={styles.title_h2}>Fizibil Mühendislik & Yazılım</h2>
        <p className={styles.paragraph}>
          Farklı mühendislik disiplinlerini bir arada kullanarak etkin çözümler
          üreten ve mevcut çözümlemeleri de daha ileri bir noktaya taşımayı
          hedefleyen firmamız; inşaat mühendisliğinden harita mühendisliğine
          kadar, geniş bir yelpazede proje ve hizmet sunmaktadır.
        </p>
      </div>
      <div className="lg:mt-16">
        <div className={styles.card}>
          <div className={styles.card_gray}>
            <div className={styles.card_line}></div>
            <h3 className={styles.card_title}>Project Title</h3>
            <p className="lg:my-6 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              accusamus ab voluptatibus inventore, architecto illum quisquam
              cupiditate. Quaerat quod hic tempore officia error atque libero
              voluptates, quisquam maiores dolor dolorem?
            </p>
            <Link href="/" className={styles.card_button}>
              <span className={styles.card_button_title}>
                Explore Solutions
              </span>
              <Image
                src="/assets/icons/right-sm.svg"
                width={20}
                height={20}
                alt="right"
              />
            </Link>
          </div>
          <div className={styles.card_black}>1</div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_black}>1</div>
          <div className={styles.card_gray}>
            <div className={styles.card_line}></div>
            <h3 className={styles.card_title}>Project Title</h3>
            <p className="lg:my-6 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              accusamus ab voluptatibus inventore, architecto illum quisquam
              cupiditate. Quaerat quod hic tempore officia error atque libero
              voluptates, quisquam maiores dolor dolorem?
            </p>
            <Link href="/" className={styles.card_button}>
              <span className={styles.card_button_title}>
                Explore Solutions
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
            <h3 className={styles.card_title}>Project Title</h3>
            <p className="lg:my-6 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              accusamus ab voluptatibus inventore, architecto illum quisquam
              cupiditate. Quaerat quod hic tempore officia error atque libero
              voluptates, quisquam maiores dolor dolorem?
            </p>
            <Link href="/" className={styles.card_button}>
              <span className={styles.card_button_title}>
                Explore Solutions
              </span>
              <Image
                src="/assets/icons/right-sm.svg"
                width={20}
                height={20}
                alt="right"
              />
            </Link>
          </div>
          <div className={styles.card_black}>1</div>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
