import React from "react";
import Link from "next/link";

const projeBedel = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/pagebanner.jpg"
          className="w-full lg:h-auto h-[15vh]"
          alt="Staik Proje Bedel Banner"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="mx-32">
          <h2 className="text-center lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 pb-3">
            Statik Proje Bedeli Hesaplama
          </h2>
          <p>
            İNŞAAT MÜHENDİSLİĞİ PROJE VE FENNİ MESULİYET HİZMET BEDEL HESAPLAMA
            UYGULAMASI
          </p>
          <p className="mt-2">
            Detaylı bilgi ve fiyatlandırma için bu{" "}
            <Link
              className="text-blue-500 hover:text-blue-600"
              href="https://apps.apple.com/tr/app/statik-proje-bedeli/id1295922529?l=tr"
            >
              bağlantıya
            </Link>{" "}
            tıklayabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default projeBedel;
