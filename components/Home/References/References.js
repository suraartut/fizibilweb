import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "./references.module.css";
import { referencesData } from "@/collections/referencesData";

const References = () => {
  return (
    <div className="my-8">
      <h2 className={styles.title}>Referanslarımız</h2>
      {/* <p className={styles.paragraph}>
        Thousands of companies around the world utilize Bentley software. Here
        are just a few….
      </p> */}
      <Marquee className="reference" autoFill={true}>
        {referencesData?.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.url}
              width={210}
              height={200}
              alt={item.alt}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default References;
