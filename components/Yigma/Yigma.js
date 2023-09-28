import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yigma.module.css";

const Yigma = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/yigma-banner.png"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto lg:my-10 my-6">
        <div className="lg:mx-32 mx-5">
          <h2 className="text-center lg:w-1/4 w-2/3 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-2">
            Yığma Analiz Yazılımı
          </h2>
          <p className="">
            <strong>Fizibil yığma programı,</strong> yığma binaların
            tasarlanması ve tahkikinde kullanılmak üzere KOSGEB Ar-Ge İnovasyon
            projesi olarak geliştirilmiş bir yazılımdır. Yazılım bulut desteğine
            sahiptir. Aynı projenin farklı versiyonları ekip çalışmasına imkan
            sağlayacak şekilde bulutta saklanabilmektedir.
          </p>
          <p className="my-5">
            Yığma yapılar için; Riskli Yapı Tespit Projesi RBT 2019, Uyumlu Yeni
            Bina Tasarımı TBDY 2018, Mevcut Bina Değerlendirme TBDY 2018 olmak
            üzere üç farklı analiz ve tasarım seçeneği mevcuttur.
          </p>
          <div className="mt-6 lg:flex justify-between">
            <div className="lg:my-0 my-4">
              <p className="font-bold mb-2">Öne Çıkan Özellikler</p>
              <ol className="list-disc mx-5">
                <li>Kullanıcı dostu arayüz</li>
                <li>
                  Bulut desteği ile projelerin bulutta saklanma ve indirilmesi
                </li>
                <li>Yapısal olmayan elemanların analizi</li>
                <li>
                  Eşdeğer deprem yükü veya mod birleştirmeye göre deprem hesabı
                </li>
                <li>Modelde merdiven ve çatı eklenmesi</li>
                <li>Katman gizlenmesi</li>
                <li>Kolay anlaşılır raporlama</li>
                <li>Pafta düzenleme editörü</li>
                <li>Kesit alma</li>
                <li>Metraj</li>
              </ol>
            </div>
            <div className="">
              Pafta Fotoğrafıcadfasfsdgfdafadfsadasfadfasf
              {/* <Image
                src="/assets/Images/Resim1.jpg"
                width={800}
                height={600}
                alt="alt"
              /> */}
              <div className="text-sm italic w-full text-center">
                Pafta Düzenleme Editörü
              </div>
              {/* Rapor örneklerinin fotoğraflarını de koy, bulut tabanlı yığma arayüzünü de koy */}
            </div>
          </div>
          <p className="mt-8">
            Fizibil yığma lisanslı dosya için{" "}
            <span className="text-blue-500">
              <Link
                href="/assets/File/fizibil.yigma2018.2511.msi"
                download="fizibil-yigma-lisansli-dosya"
              >
                tıklayınız
              </Link>
            </span>
            .
          </p>
          <p className="my-1">
            Fizibil yığma demo dosyası için{" "}
            <span className="text-blue-500">
              <Link
                href="/assets/File/fizibil.yigma2018.2503.demo.msi"
                download="fizibil-yigma-demo"
              >
                tıklayınız
              </Link>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yigma;
