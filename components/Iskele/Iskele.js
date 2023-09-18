import React from "react";
import Link from "next/link";
import styles from "./iskele.module.css";

const Iskele = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/iskele-banner.png"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="mx-32">
          <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            İskele Analiz Yazılımı
          </h2>
          <p className="">Açıklama</p>
          <p className="my-3">
            Fizibil iskele lisanslı dosya için{" "}
            <span className="text-blue-500">
              <Link
                href="/assets/File/fizibil.iskele.online.msi"
                download="fizibil-yigma-lisansli-dosya"
              >
                tıklayınız
              </Link>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iskele;
