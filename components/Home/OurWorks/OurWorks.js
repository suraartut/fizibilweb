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
            ihtiyaçları karşılamak için burada! İskele ve yığma yazılımı,
            doğalgaz ve elektrik sayacı okuma uygulamaları, statik proje bedeli
            hesaplama, görüntü işleme, MLM özellikli e-ticaret, ayak analizi,
            kentsel dönüşüm bilgi sistemi, ERP danışmanlık ve yazılım
            hizmetleri, özel ve butik yazılım çözümleri, web programlama, mobil
            programlama ve masaüstü programlama gibi birbirinden özgün ve etkili
            ürünlerimizle iş süreçlerinizi optimize edin. Sektördeki
            deneyimimizle, müşterilerimizin özel ihtiyaçlarına yönelik çözümler
            sunarak, teknolojik dönüşümde lider olmanıza yardımcı oluyoruz.
            Gelişmiş yazılım çözümleri ile işlerinizi daha verimli ve rekabetçi
            bir şekilde yönetmek için bize katılın!
          </p>
          {/* <Link href="/" className={styles.card_button}>
            View All Software
          </Link> */}
        </div>

        <figure className="snip1585">
          <Image
            src="/assets/Images/yıgma.png"
            width={700}
            height={600}
            alt="Project"
            className={styles.image}
          />
          <Link href="/3d-cad-programlama">
            <figcaption>
              <h3>
                3D CAD <span>Yazılım</span>
              </h3>
            </figcaption>
          </Link>
        </figure>

        <figure className="snip1585">
          <Link href="/web-uygulama">
            <img
              src="/assets/Images/butik-yazılım.png"
              alt="Project"
              className={styles.image}
            />
            <figcaption>
              <h3>
                Web <span>Uygulamaları</span>
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
