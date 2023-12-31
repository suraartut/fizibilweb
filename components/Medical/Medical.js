import React from "react";

const Medical = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/medical-banner.png"
          className="w-full lg:h-auto h-full"
        />
      </div>
      <div className="w-full my-10">
        <div className="lg:container lg:mx-auto mx-5">
          <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            Medical
          </h2>
          <p className="">Açıklama</p>
        </div>
      </div>
    </div>
  );
};

export default Medical;
