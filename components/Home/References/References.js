import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "./references.module.css";

const References = () => {
  return (
    <div className="my-8">
      <h2 className={styles.title}>Referanslarımız</h2>
      <p className={styles.paragraph}>
        Thousands of companies around the world utilize Bentley software. Here
        are just a few….
      </p>
      <Marquee className="reference">
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-aecom.png"
          width={210}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-finley-engineering-group.png"
          width={210}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-notevault-dpr.png"
          width={208}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-notevault-malcolm.png"
          width={210}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-british-water.png"
          width={210}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-wsp.png"
          width={210}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-geotechnical-engineering-ltd.png"
          width={210}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-sir-robert-mcAlpine.png"
          width={210}
          height={200}
          alt="Referans"
        />
        <Image
          src="https://www.bentley.com/wp-content/uploads/bentley-partner-logo-hs2.png"
          width={210}
          height={200}
          alt="Referans"
        />
      </Marquee>
    </div>
  );
};

export default References;
