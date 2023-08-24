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
          <h3 className="font-bold text-xl">Our Works</h3>
          <p className="lg:my-6 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            accusamus ab voluptatibus inventore, architecto illum quisquam
            cupiditate. Quaerat quod hic tempore officia error atque libero
            voluptates, quisquam maiores dolor dolorem?
          </p>
          <Link href="/" className={styles.card_button}>
            View All Software
          </Link>
        </div>
        <div className={styles.images_card}>
          <img
            src="https://www.bentley.com/wp-content/uploads/thumbnail-home-feature-cad-modeling-and-visualization-700x600-1.jpg"
            alt="Project"
            className={styles.image}
          />
        </div>
        <div className={styles.images_card}>
          <img
            src="https://www.bentley.com/wp-content/uploads/thumbnail-home-feature-project-delivery-700x600-1.jpg"
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
