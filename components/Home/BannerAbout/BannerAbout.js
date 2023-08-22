import React from "react";
import styles from "./bannerabout.module.css";

const BannerAbout = () => {
  return (
    <div className="container mx-auto lg:my-16 my-10">
      <div className="text-center">
        <h3 className="lg:text-base text-sm font-semibold lg:px-0 px-4">
          AKADEMİK BİLGİ VE TECRÜBE İLE REEL SEKTÖRDE
        </h3>
        <h2 className="lg:text-3xl text-xl font-semibold my-2 lg:px-0 px-5">
          Fizibil Mühendislik & Yazılım
        </h2>
        <p className="lg:w-1/2 w-2/3 mx-auto py-3 ">
          Farklı mühendislik disiplinlerini bir arada kullanarak etkin çözümler
          üreten ve mevcut çözümlemeleri de daha ileri bir noktaya taşımayı
          hedefleyen firmamız; inşaat mühendisliğinden harita mühendisliğine
          kadar, geniş bir yelpazede proje ve hizmet sunmaktadır.
        </p>
      </div>
      <div className="text-center mt-16">
        <div className="mx-auto w-3/4 my-5 gap-5 lg:grid grid-cols-3">
          <div className="col-span-2 bg-[#eaebec]">1</div>
          <div className="col-span-1 h-[280px] bg-[#1A1A1A]">1</div>
        </div>
        <div className="mx-auto w-3/4 my-5 gap-5 lg:grid grid-cols-3">
          <div className="col-span-1 h-[280px] bg-[#1A1A1A]">1</div>
          <div className="col-span-2 bg-[#eaebec]">1</div>
        </div>
        <div className="mx-auto w-3/4 my-5 gap-5 lg:grid grid-cols-3">
          <div className="col-span-2 bg-[#eaebec]">1</div>
          <div className="col-span-1 h-[280px] bg-[#1A1A1A]">1</div>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
