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
            Son teknoloji ve bilimsel gelişmelerin ışığında dünya
            standartlarında bilişim alanında yenilikçi çözümler üretiyoruz.
            Bunun için bilimsel ve teknolojik alandaki akademik
            araştırmalarımızı ülkemiz adına katma değere dönüştürecek projeler
            geliştiriyoruz. <br />
            <br />
            Üç boyutlu yazılım geliştirme, coğrafi bilgi sistem yazılımları ve
            harita sunucusu kurulum, servisler arası ara yazılım, web
            uygulamaları, görüntü işleme ve makine öğrenmesi alanlarında
            hizmetler vermekteyiz.
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
          <a href="/3d-cad-programlama">
            <figcaption>
              <h3>
                3D CAD <span>Yazılım</span>
              </h3>
            </figcaption>
          </a>
        </figure>

        <figure className="snip1585">
          <a href="/web-uygulama">
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
          </a>
        </figure>
      </div>

      <div className={styles.divs}>
        {workData?.map((item, index) => {
          return (
            <figure key={index} className="snip1585">
              <a href={item.link}>
                <img src={item.url} alt={item.alt} className={styles.image} />
                <figcaption>
                  <h3>
                    {item.title1} <span>{item.title2}</span>
                  </h3>
                </figcaption>
              </a>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default OurWorks;
