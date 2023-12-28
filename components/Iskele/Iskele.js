import React from "react";
import Link from "next/link";
import styles from "./iskele.module.css";
import Image from "next/image";

const Iskele = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/iskele-banner.png"
          className="w-full lg:h-auto h-[15vh]"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto lg:my-10 my-3">
        <div className="lg:flex items-center lg:mx-0 mx-5">
          <div className="lg:flex hidden">
            <Image
              src="/assets/Images/iskele-multi.png"
              alt="İskele Analiz Yazılımı Ekran Görüntüleri"
              width={1500}
              height={1500}
            />
          </div>
          <div className="">
            <h2 className="lg:text-3xl text-2xl pb-2 font-bold">
              Fizibil İskele Analizi
            </h2>
            <p className="mb-6 italic">
              İnşaat mühendislerinin kullanımı için cephe iskelelerinin 3
              boyutlu modellenmesi, statik analizi, raporlanması ve proje
              paftalarının dwg formatında otomatik hazırlanması için
              geliştirilmiş paket program
            </p>
            <h3 className="lg:text-xl text-lg py-1">
              Neden Fizibil İskele Analizi
            </h3>
            {/* <p>Fizibil İskele Analiz Tahkik ve Çizim Programı</p> */}
            <p className="text-gray-400">
              • Dongle gerektirmeyen online lisanslama
              <br />• Aks sistemi ile pratik 3D modelleme
              <br />• Hızlı ve güvenilir analiz ve raporlama
              <br />• Proje çizimleri görüntüleme ve DWG formatında kaydetme
              <br />• DWG dosyadan Aks okuma <br />• Cazip fiyat
            </p>
            <p className="my-3 italic">
              Fizibil iskele lisanslı dosya için{" "}
              <span className="text-blue-500">
                <Link
                  href="/assets/File/fizibil.iskele.online.msi"
                  download="fizibil-iskele-lisansli-dosya"
                >
                  tıklayınız
                </Link>
              </span>
              .
            </p>
          </div>
        </div>
        <div className="lg:text-xl text-lg lg:flex justify-between lg:mx-auto mx-5 lg:mb-10 mb-5 lg:mt-0 mt-6">
          <div className="lg:hidden block">
            <Image
              src="/assets/Images/iskele-multi.png"
              alt="İskele Analiz Yazılımı Ekran Görüntüleri"
              width={1500}
              height={1500}
            />
          </div>
          <div>
            <div className="flex lg:my-4 my-2 items-center italic">
              <Image
                src="/assets/icons/check.svg"
                alt="Check"
                width={80}
                height={80}
              />
              <p>Planda Kolay İskele Tanımlanması</p>
            </div>
            <div className="flex lg:my-4 my-2 items-center italic">
              <Image
                src="/assets/icons/check.svg"
                alt="Check"
                width={80}
                height={80}
              />
              <p>İskele Alt ve Üst Kotlarını Farklı Tanımlayabilme</p>
            </div>
          </div>
          <div>
            <div className="flex lg:my-4 my-2 items-center italic">
              <Image
                src="/assets/icons/check.svg"
                alt="Check"
                width={80}
                height={80}
              />
              <p>Rest Service Üzerinden Lisanslama</p>
            </div>
            <div className="flex lg:my-4 my-2 items-center italic">
              <Image
                src="/assets/icons/check.svg"
                alt="Check"
                width={80}
                height={80}
              />
              <p>Sms ve Mail Kontrollü Lisans Taşıma</p>
            </div>
          </div>
          <div>
            <div className="flex lg:my-4 my-2 items-center italic">
              <Image
                src="/assets/icons/check.svg"
                alt="Check"
                width={80}
                height={80}
              />
              <p>Plan Görünüş Çizimleri</p>
            </div>
            <div className="flex lg:my-4 my-2 items-center italic">
              <Image
                src="/assets/icons/check.svg"
                alt="Check"
                width={80}
                height={80}
              />
              <p>Bağlantı ve Detay Çizimleri</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 lg:py-10 py-6 lg:px-20 px-6 mt-5 lg:mx-0 mx-5">
          <p className="font-bold lg:py-3 py-2">
            İskele Yazılım Fiyatlarımızı Hemen Keşfedin!
          </p>
          <p className="lg:pb-3 pb-2">
            İskele yazılımında fark yaratmak için buradayız! İşinizi daha
            verimli ve etkili bir şekilde yönetmek için size özel çözümlerimizin
            fiyatlarını öğrenmek ister misiniz? İşte size özel bir deneyim
            yaşamak için adım adım rehber:
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
              <span className="font-bold">İskele Yazılımı İle Yenilik:</span>
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
            İskele yazılımıyla iş süreçlerinizi optimize etmek ve daha rekabetçi
            bir konuma gelmek için şimdi harekete geçin. Size özel çözümlerimizi
            keşfetmek ve avantajlı fiyatlarımızı öğrenmek için formu doldurun,
            teknolojiyle dolu bir geleceğe adım atın!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iskele;
