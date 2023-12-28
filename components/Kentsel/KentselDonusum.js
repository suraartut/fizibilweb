import React from "react";
import Image from "next/image";

const Kentsel = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/kentseldonusum-banner.png"
          className="w-full lg:h-auto h-[15vh]"
          alt="Kentsel Dönüşüm Bilgi Sistemi"
        />
      </div>
      <div className="w-full my-8">
        <div className="lg:container lg:mx-auto mx-5">
          <h2 className="text-center lg:mb-9 mb-5 lg:text-3xl text-2xl font-bold pb-3">
            Kentsel Dönüşüm Bilgi Sistemi
          </h2>
          <div className="lg:flex gap-10 items-center">
            <div className="bg-gray-100 px-4 py-2">
              <Image
                src="/assets/Images/kentsel-donusum.png"
                width={810}
                height={750}
                alt="Kentsel Dönüşüm Ekran"
              />
            </div>
            <div>
              <p className="text-lg lg:mt-0 mt-4">
                Kentsel dönüşüm kanunu kapsamında dönüştürülecek alanlarda
                kullanılmak üzere kentsel dönüşüm bilgi sistemi hazırlanmıştır.
              </p>
              <p className="mt-5 mb-2">
                Web ortamında kullanılmak üzere hazırlanan bu uygulama ile;
              </p>
              <div className="flex gap-2 items-center mb-2">
                <Image
                  src="/assets/icons/check.svg"
                  alt="check"
                  width={30}
                  height={30}
                />
                <p>
                  Bina, daire ve daire sahibi bilgileri eklenebilir,
                  düzenlenebilir, silinebilir ve listelenebilir.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/icons/check.svg"
                  alt="check"
                  width={30}
                  height={30}
                />
                <p>
                  Bina ve daire sahibi bilgileri ile ilişkili olarak noter
                  sözleşmesi, noter vekalet, karot testi, jeolojik etüt,
                  takyidatlı tapu kaydı, engellilik durumu vb dosyalar
                  eklenebilir.
                </p>
              </div>
              <div className="flex gap-2 items-center my-2">
                <Image
                  src="/assets/icons/check.svg"
                  alt="check"
                  width={30}
                  height={30}
                />
                <p>Bu bilgiler excel formatında indirilerek kullanılabilir.</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/icons/check.svg"
                  alt="check"
                  width={30}
                  height={30}
                />
                <p>
                  İşlemleri tamamlanan binalar, daireler ve daire sahipleri
                  filtrelenebilir ve projenin ilerleme durumu hakkında bilgi
                  sahibi olunabilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kentsel;
