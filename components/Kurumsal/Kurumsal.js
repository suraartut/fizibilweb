import React from "react";
import Image from "next/image";

const KurumsalComponent = () => {
  return (
    <div className="h-screen w-full lg:pt-32 pt-24 lg:px-0 px-5">
      <h1 className="lg:container mx-auto text-center lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] lg:pb-6 pb-3">
        KURUMSAL
      </h1>
      <div className="container mx-auto">Hakkımızda</div>
      <div className="w-full bg-[#eaebec] my-20">
        <div className="container mx-auto lg:px-20 lg:pt-16 pb-10">
          <h2 className="font-bold lg:text-2xl text-xl">
            Üç Adımda Neden Fizibil?
          </h2>
        </div>
        <div className="container mx-auto pb-20 min-h-full">
          <div className="lg:grid grid-cols-3 lg:px-20 gap-6">
            <div className="col-span-1 bg-white px-10 py-16">
              <div className="">
                <Image
                  src="/assets/icons/ekonomik.svg"
                  width={80}
                  height={80}
                />
                <h3 className="uppercase font-bold tracking-widest text-xl my-5">
                  Ekonomİk
                </h3>
              </div>
              <div className="h-1 w-24 bg-[#2e8fce] my-5"></div>
            </div>
            <div className="col-span-1 bg-[#2e8fce] text-white px-10 py-16">
              2
            </div>
            <div className="col-span-1 bg-white px-10 py-16">3</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">Vizyon misyon</div>
    </div>
  );
};

export default KurumsalComponent;
