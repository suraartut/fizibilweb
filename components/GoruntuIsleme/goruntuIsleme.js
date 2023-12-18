import React from "react";
import style from "./goruntu.module.css";
import Link from "next/link";

const goruntuIsleme = () => {
  return (
    <div className="w-full pt-32 mb-10">
      <div className="lg:container mx-auto">
        <h3 className="border-b border-black my-3 font-bold font-lg">
          Görüntü İşleme Uygulamalarımız
        </h3>
        <div className="text-blue-500">
          <Link href="/dogalgaz-sayac">• Doğalgaz Sayacı Okuma</Link>
        </div>
        <div className="text-blue-500">
          <Link href="/elektrik-sayac">• Elektrik Sayacı Okuma</Link>
        </div>
      </div>
    </div>
  );
};

export default goruntuIsleme;
