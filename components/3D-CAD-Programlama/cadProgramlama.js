import React from "react";
import Link from "next/link";

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
        <div className="lg:mx-24 mx-5">
          <div className="lg:mb-12 mb-6">
            <h2 className="text-center lg:mb-2 mb-1 lg:text-3xl text-2xl font-bold">
              İleri Seviye CAD Çözümleriyle İşinizin Geleceğini Şekillendirin!
            </h2>
            <h3 className="text-center font-bold italic">
              "Akıllı CAD Çözümleri İçin Yenilikçi ve İleri Düzey 2D/3D
              Modelleme Yazılımlarıyla Sınırları Zorlayın!"
            </h3>
          </div>
          <p className="font-bold py-3">Yapabileceklerimiz</p>
          <p className="lg:pb-3 pb-2">
            • 3 boyutlu modellemenin manuel olarak kullanıcı tarafından en rahat
            şekilde yapılabilmesini sağlamak. <br />• Birlikte çalışılması
            gereken programlardan veya manuel olarak hazırlanmış dosyalardan
            elde edilen verilerin otomatik 3 boyutlu model haline getirilmesini
            sağlamak. <br />• Model içerisinde bulunan elemanlara veri
            atamasını, verilerin görsel olmayan tablolar halinde yönetilmesi
            yerine hazırlanan model üzerinden yönetilmesini sağlamak. <br />•
            Elde edilen verilerle gerekli analizler yapmak, özelleştirilmiş
            tablolar haline getirmek ve istenen çıktıları elde edip metin, tablo
            veya çizim olarak kaydedilmesini sağlamak. <br />• Kullanıcıların
            ihtiyaçlarına özel arayüz oluşturarak, kullanıcıların daha etkili
            bir çalışma deneyimi sunmasını sağlamak.
          </p>
          <p className="font-bold pt-6 pb-4">
            Neden 3D CAD Tabanlı Butik Yazılım?
          </p>
          <p className="lg:pb-3 pb-2">
            <span className="font-bold underline">
              Özelleştirilmiş Çözümler:{" "}
            </span>
            Her sektör ve her proje farklıdır. Standart yazılımlar genellikle
            spesifik gereksinimleri karşılamakta yetersiz kalabilir. Butik
            yazılımlar, müşterilerimizin benzersiz ihtiyaçlarına yönelik
            özelleştirilmiş çözümler sunar.
          </p>
          <p className="lg:pb-3 pb-2">
            <span className="font-bold underline">
              Performans ve Verimlilik:{" "}
            </span>
            Genel kullanım amaçlı yazılımların aksine, butik yazılımlar belirli
            bir endüstri veya projeye odaklanarak daha yüksek performans ve
            verimlilik sunabilir. Bu da projelerin daha hızlı tamamlanmasını ve
            maliyet tasarruflarını beraberinde getirir.
          </p>
          <p className="pb-10">
            <span className="font-bold underline">
              Teknoloji Trendlerine Hızlı Adaptasyon:{" "}
            </span>
            Butik yazılım geliştirme, sektördeki güncel teknoloji trendlerine
            hızlı bir şekilde adapte olma esnekliği sağlar. Bu da
            müşterilerimizin rekabet avantajını artırmasına yardımcı olur.
          </p>
          <p className="pb-2 lg:w-2/3 text-center mx-auto">
            Siz de bizimle birlikte çalışarak size özel geliştirilecek 3 boyutlu
            CAD tabanlı uygulamalarla projelerinizi daha yüksek bir seviyeye
            taşıyabilir ve endüstri normlarını aşabilirsiniz.
          </p>
          <p className="pb-2 lg:w-2/3 text-center mx-auto italic">
            Projelerinizle ilgili bizimle
            <span className="text-blue-500">
              <Link href="/contact"> iletişime geçin</Li>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default cadProgramlama;
