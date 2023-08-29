import React from "react";

const Web = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="/assets/Images/pagebanner.jpg"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="mx-32">
          <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            Web
          </h2>
          <p className="">Açıklama</p>
          <p>Download Bölümü</p>
        </div>
      </div>
    </div>
  );
};

export default Web;
