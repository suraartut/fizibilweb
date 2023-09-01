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
          <h3 className="font-bold text-xl">Fizibilin Çalışma Alanları</h3>
          <p className="lg:my-6 my-4">
            Son teknoloji ve bilimsel gelişmelerin ışığında dünya
            standartlarında bilişim alanında yenilikçi çözümler üretiyoruz.
            Bunun için bilimsel ve teknolojik alandaki akademik
            araştırmalarımızı ülkemiz adına katma değere dönüştürecek projeler
            geliştiriyoruz.
          </p>
          {/* <Link href="/" className={styles.card_button}>
            View All Software
          </Link> */}
        </div>
        <div className={styles.images_card}>
          <img
            src="/assets/Images/yıgma.png"
            alt="Project"
            className={styles.image}
          />
        </div>
        <div className={styles.images_card}>
          <img
            src="/assets/Images/butik-yazılım.png"
            alt="Project"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.divs}>
        {workData?.map((item, index) => {
          return (
            <div key={index} className={styles.images_card}>
              <img src={item.url} alt={item.alt} className={styles.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurWorks;
