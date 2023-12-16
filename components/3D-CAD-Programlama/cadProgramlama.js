import React from "react";

const cadProgramlama = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/3D-banner.png"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="mx-32">
          <h2 className="lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            CAD Tabanlı 2D/3D Modelleme Yazılımları Geliştirme
          </h2>
          <p className="">
            Projelerinizle ilgili bizimle
            <span className="text-blue-500">
              <a href="/contact"> iletişime geçin</a>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default cadProgramlama;
