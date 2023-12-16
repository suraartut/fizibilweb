import React from "react";
import style from "./goruntu.module.css";

const goruntuIsleme = () => {
  return (
    <div className="w-full pt-32 mb-10">
      <div className="lg:container mx-auto">
        <h3 className="border-b border-black my-3 font-bold font-lg">
          Ürünlerimiz
        </h3>
        <div className="text-blue-500">
          <a href="/dogalgaz-sayac">• Doğalgaz Sayacı Okuma</a>
        </div>
        <div className="text-blue-500">
          <a href="/elektrik-sayac">• Elektrik Sayacı Okuma</a>
        </div>
      </div>
    </div>
  );
};

export default goruntuIsleme;
