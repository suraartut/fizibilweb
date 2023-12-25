import React from "react";
import styles from "./ourworks.module.css";
import Link from "next/link";
import Image from "next/image";
import { workData } from "@/collections/workData";

const OurWorks = () => {
  return (
    <div className="w-full pt-10">
      <div className={styles.divs}>
        <div className={styles.textcard}>
          <div className={styles.line}></div>
          <h3 className="font-bold text-xl">Ürünlerimiz</h3>
          <p className="lg:mt-6 mt-4">
            Fizibil, geniş ve çeşitli bir yazılım yelpazesi ile sektördeki
            ihtiyaçları karşılamak için burada! Doğalgaz ve elektrik sayacı
            okuma uygulamaları, iskele ve yığma yazılımı, statik proje bedeli
            hesaplama, görüntü işleme, MLM özellikli e-ticaret, magenta ayak
            analizi, kentsel dönüşüm bilgi sistemi, ERP-CRM danışmanlık ve
            yazılım hizmetleri, özel ve butik yazılım çözümleri, web
            programlama, mobil programlama ve masaüstü programlama gibi
            birbirinden özgün ve etkili ürün ve hizmetlerimizle iş süreçlerinizi
            optimize edin. Sektördeki deneyimimizle, müşterilerimizin özel
            ihtiyaçlarına yönelik çözümler sunarak, teknolojik dönüşümde lider
            olmanıza yardımcı oluyoruz. Gelişmiş yazılım çözümleri ile
            işlerinizi daha verimli ve rekabetçi bir şekilde yönetmek için bize
            ulaşın!
          </p>
          {/* <Link href="/" className={styles.card_button}>
            View All Software
          </Link> */}
        </div>

        <figure className="snip1585">
          <Image
            src="/assets/Images/butik-yazılım.png"
            width={700}
            height={600}
            alt="Doğalgaz Sayacı Okuma"
            className={styles.image}
          />
          <Link href="/dogalgaz-sayac">
            <figcaption>
              <h3>
                DOĞALGAZ <span>SAYAÇ OKUMA</span>
              </h3>
            </figcaption>
          </Link>
        </figure>

        <figure className="snip1585">
          <Link href="/elektrik-sayac">
            <img
              src="/assets/Images/yıgma.png"
              alt="Elektrik Sayacı Okuma"
              className={styles.image}
            />
            <figcaption>
              <h3>
                ELEKTRİK<span>SAYAÇ OKUMA</span>
              </h3>
            </figcaption>
          </Link>
        </figure>
      </div>

      <div className={styles.divs}>
        {workData?.map((item, index) => {
          return (
            <figure key={index} className="snip1585">
              <Link href={item.link}>
                <img src={item.url} alt={item.alt} className={styles.image} />
                <figcaption>
                  <h3>
                    {item.title1} <span>{item.title2}</span>
                  </h3>
                </figcaption>
              </Link>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default OurWorks;
