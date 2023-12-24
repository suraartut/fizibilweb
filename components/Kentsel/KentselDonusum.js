import React from "react";

const Kentsel = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/kent-donus-banner.png"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="mx-32">
          <h2 className="text-center lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 pb-3">
            Kentsel Dönüşüm Bilgi Sistemi
          </h2>
          <p className="">Açıklama</p>
        </div>
      </div>
    </div>
  );
};

export default Kentsel;
