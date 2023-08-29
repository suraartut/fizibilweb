import React from "react";
import styles from "./sayac.module.css";

const sayacOkuma = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img src="/assets/Images/sayacokuma1200450.png" className="w-full" />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="mx-32">
          {/* <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            Sayaç Okuma Sistemi
          </h2> */}
          <p className="text-lg lg:pt-10 lg:pb-4">
            Yapay zeka alanında yaptığımız çeşitli bilimsel araştırmalarımızı,
            sektörün ihtiyaçlarına yönelik olarak sonuç ürünlere dönüştürüyoruz.
            Dijital görüntülerin elde edilerek işlenmesini ve analizini
            gerçekleştirerek gerçek dünyadan sayısal veya sembolik bilgileri
            çıktı olarak elde edebiliyoruz. Tarafımızca geliştirilen yapay zekâ
            ve görüntü işleme yazılımları ile tüm mobil cihazlar (Android ve
            iOS), doğalgaz ve elektrik sayaçlarının endeks ve sayaç seri
            numarasını içeren barkod bilgisiyle, kamera akışından otomatik
            olarak anlık okuma yapabilecek ve endeksör cihazların yerine
            kullanılabilecektir.
          </p>
          <div className="lg:py-14 py-3 lg:grid grid-cols-2 gap-24">
            <div>
              <img src="/assets/Images/ulutek.jpg" />
            </div>
            <div>
              <h3 className="lg:text-3xl text-xl font-bold mb-5">
                Doğalgaz Sayacı
              </h3>
              <p className="lg:text-lg">Açıklama</p>
            </div>
          </div>
          <div className="lg:py-14 py-3 lg:grid grid-cols-2 gap-24">
            <div>
              <h3 className="lg:text-3xl text-xl font-bold mb-5">
                Elektrik Sayacı
              </h3>
              <p className="lg:text-lg">
                Sayaçtan alınması gereken değerler gün içinde bile zamanlara
                bölünmektedir, haftasonu tüketimleri ve enerji ölçüm cinsinin de
                işin içine girmesiyle okuyucunun iş yükü ve hata yapma olasılığı
                artmaktadır. Saha elemanları bu uygulamayı kullanarak, personel
                hesapları üzerinden, gerekli görüldüğü taktirde okuma
                yapabileceklerdir. Diğer taraftan uygulama sayesinde Endeksör
                cihaz maliyetlerinin, akıllı telefonlarla azaltılabileceği
                öngörülmektedir. Uygulama sayesinde saha elemanları hızlı bir
                şekilde okumalarını gerçekleştirebilir ve bilgileri ilgili
                şirket sunucusu ile kısa sürede elindeki akıllı telefon
                yardımıyla başka hiçbir ek cihaza gerek kalmadan paylaşabilir.
                Böylece zaman ve saha için istihdam edilen personelden tasarruf
                sağlanabilir.
              </p>
            </div>
            <div>
              <img src="/assets/Images/ulutek.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sayacOkuma;
