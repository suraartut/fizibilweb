import React from "react";

const Erp = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/erp-banner.png"
          className="w-full lg:h-auto h-[18vh]"
          alt="ERP & CRM Banner"
        />
      </div>
      <div className="lg:container lg:mx-auto mx-5 lg:my-10 my-5">
        <div className="">
          {/* <h2 className="text-center lg:mb-9 mb-5 lg:text-3xl text-2xl font-bold pb-3">
            ERP & CRM
          </h2> */}
          <p className="font-bold italic text-lg text-center">
            Kurumsal dünyanın hızla evrildiği bu dönemde, işletmenizin rekabet
            avantajını artırmak ve büyümek için doğru adımları atmaya hazır
            mısınız? İşletmenizin potansiyelini keşfedin, rekabet avantajınızı
            artırın! <span className="text-[#2e8fce]">Fizibil,</span>{" "}
            işletmenizin başarılı bir geleceğe giden yolculuğunda sizinle
            birlikte ilerliyor!
          </p>
        </div>
        <div className="lg:grid grid-cols-2 lg:mt-10 text-lg listimage">
          <div>
            <h4 className="font-bold mb-2">ERP Çözümleri</h4>
            <li>İş süreçlerinizi entegre ederek verimliliği artırın.</li>
            <li>
              Finans yönetiminden stok takibine kadar kapsamlı çözümler
              sunuyoruz.
            </li>
          </div>
          <div>
            <h4 className="font-bold mb-2">CRM Danışmanlığı</h4>
            <li>
              Müşteri ilişkilerinizi güçlendirerek satış performansınızı
              artırın.
            </li>
            <li>
              Müşteri deneyimini optimize ederek sadık müşteri kitlenizi
              oluşturun.
            </li>
          </div>
        </div>
        <div className="text-center lg:mb-8 mb-4 lg:mt-14 mt-8 lg:text-6xl text-3xl font-bold">
          <div className="lg:my-2 text-[#2e8fce]">
            İSTEDİĞİNİZ ANDA İSTEDİĞİNİZ YERDEN
          </div>
          <div className="italic text-[#1b4058]">İŞİNİZE HAKİM OLUN!</div>
        </div>
        <div className="">
          <img
            src="/assets/Images/erp-entegrasyonlar.png"
            className="w-full lg:h-auto h-[21vh]"
            alt="ERP&CRM entegrasyonlar"
          />
        </div>
      </div>
    </div>
  );
};

export default Erp;
