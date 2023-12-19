import React from "react";
import Link from "next/link";
import styles from "./iskele.module.css";

const Iskele = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/iskele-banner.png"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto mx-5 my-10">
        <div className="mx-32">
          <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            Neden Fizibil İskele?
          </h2>
          {/* <p>Fizibil İskele Analiz Tahkik ve Çizim Programı</p> */}
          <p className="">
            • Dongle gerektirmeyen online lisanslama
            <br />• Aks sistemi ile pratik 3D modelleme
            <br />• Hızlı ve güvenilir analiz ve raporlama
            <br />• Proje çizimleri görüntüleme ve DWG formatında kaydetme
            <br />• DWG dosyadan Aks okuma <br />• Cazip fiyat
          </p>
          <p className="my-3">
            Fizibil iskele lisanslı dosya için{" "}
            <span className="text-blue-500">
              <Link
                href="/assets/File/fizibil.iskele.online.msi"
                download="fizibil-yigma-lisansli-dosya"
              >
                tıklayınız
              </Link>
            </span>
            .
          </p>
          <div className="my-5 bg-blue-100 py-10 px-20">
            <p className="font-bold lg:py-3 py-2">
              İskele Yazılım Fiyatlarımızı Hemen Keşfedin!
            </p>
            <p className="lg:pb-3 pb-2">
              İskele yazılımında fark yaratmak için buradayız! İşinizi daha
              verimli ve etkili bir şekilde yönetmek için size özel
              çözümlerimizin fiyatlarını öğrenmek ister misiniz? İşte size özel
              bir deneyim yaşamak için adım adım rehber:
            </p>
            <ol className="list-decimal list-inside">
              <li>
                🖊️ <span className="font-bold">Formu Doldurun:</span> Formu
                doldurarak projenizle ilgili detayları bizimle paylaşın.
                İhtiyaçlarınızı tam olarak anlamamıza yardımcı olun.
              </li>
              <li>
                🚀 <span className="font-bold">Fiyatlarımızı Keşfedin: </span>
                Size özel çözümlerimizin fiyatlarını öğrenmek için formunuzu
                inceledikten sonra en uygun teklifi hazırlayalım.
              </li>
              <li>
                📞 <span className="font-bold">Hızlı İletişim: </span>
                Teklifimizi aldığınızda size en kısa sürede ulaşarak detayları
                konuşalım ve projenizi birlikte şekillendirelim.
              </li>
              <li>
                🌐
                <span className="font-bold">
                  İskele Yazılımı İle Yenilik:
                </span>{" "}
                İskele yazılımı çözümlerimizle işlerinizi daha stratejik bir
                şekilde yönetin ve sektörde fark yaratın.
              </li>
            </ol>
            <p className="font-bold lg:py-3 py-2 items-center">
              <Link href="/contact">
                Fiyatlar ve İletişim İçin Hemen Formu Doldurun 👉
              </Link>
            </p>
            <p className="lg:pb-3 pb-2">
              İskele yazılımıyla iş süreçlerinizi optimize etmek ve daha
              rekabetçi bir konuma gelmek için şimdi harekete geçin. Size özel
              çözümlerimizi keşfetmek ve avantajlı fiyatlarımızı öğrenmek için
              formu doldurun, teknolojiyle dolu bir geleceğe adım atın!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iskele;
