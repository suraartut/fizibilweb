import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yigma.module.css";

const Yigma = () => {
  return (
    <div className="w-full pt-[88px] listimage">
      <div className="w-full">
        <img
          src="/assets/Images/yigma-banner.png"
          className="w-full lg:h-auto h-full"
        />
      </div>
      <div className="w-full lg:container lg:mx-auto lg:my-10 my-5">
        <div className="lg:mx-10 mx-5">
          <h2 className="lg:text-3xl text-2xl mb-3 font-bold text-center">
            Fizibil Yığma Analizi
          </h2>
          <p className="mb-6 italic text-gray-600 text-lg text-center">
            İnşaat mühendislerinin kullanımı için Yığma binaların
            TBDY2018&apos;e göre tasarlanması, performans analizlerinin
            yapılması ve RBYBHY&apos;e göre risk analizlerinin yapılması (3
            boyutlu modellenmesi, statik-dinamik analizi, raporlanması ve proje
            paftalarının dwg formatında otomatik hazırlanması) için paket
            program
          </p>
          <p className="mt-2">
            <strong>Fizibil yığma analiz programı,</strong> yığma binaların
            tasarlanması ve tahkikinde kullanılmak üzere KOSGEB Ar-Ge İnovasyon
            projesi olarak geliştirilmiş bir yazılımdır. Bulut proje depolama
            desteğine sahip program, gelişmiş, modern ve kullanışlı veri girme
            ara yüzü ile projelerin kolay ve seri halde modellenmesini sağlarken
            gelişmiş araçları ve analiz özellikleri sayesinde hızlı, güvenilir
            analiz imkanı ve anlaşılır raporlama imkanı sunmaktadır. 16 Şubat
            2019 tarihinde yayınlan RBTE 2019’a göre riskli yapı analiz ve
            tahkiki yapılması, mod birleştirme ve döşeme yüklerinin dağıtımının
            duvar ve döşemelerin sonlu elemanlar ile modellenerek analiz
            edilmesi gibi birçok yeni kural getirildiği için sistematik sonlu
            elemanlar metodu analizleri gerektirmektedir. Fizibil Yığma Analiz
            kullanarak istenen analizler tarif edilen yöntemlerle
            yapılabilmektedir ve programın herhangi bir özelliğinin kullanılması
            için herhangi bir harici yazılım kullanma zorunluluğu
            bulunmamaktadır.
          </p>
          <p className="my-5">
            Yığma yapılar için; Riskli Yapı Tespit Projesi RBT 2019, Uyumlu Yeni
            Bina Tasarımı TBDY 2018, Mevcut Bina Değerlendirme TBDY 2018 olmak
            üzere üç farklı analiz ve tasarım seçeneği mevcuttur.
          </p>
          <div className="mt-6 lg:flex justify-between">
            <div className="lg:my-0 my-4 italic">
              <p className="font-bold mb-2">Öne Çıkan Özellikler</p>
              <ol className="">
                <li>Kullanıcı dostu modern, kolay ve sade (Ribbon) arayüz</li>
                <li>Mimari (DWG) projeden aks okuma</li>
                <li>Yapısal olmayan elemanların analizi</li>
                <li>
                  Eşdeğer deprem yükü veya Mod birleştirmeye göre deprem hesabı
                </li>
                <li>
                  Sonlu elemanlar ile duvar ve döşemelerin modellenmesi ve
                  analizi
                </li>
                <li>
                  Program içinden açılan harita üzerinden koordinat seçimi
                </li>
                <li>Çevrimdışı yaklaşık Ss ve S1 hesabı</li>
                <li>Gerçekçi merdiven ve çatı modellenmesi</li>
                <li>Katmanlı çizim yapısı</li>
                <li>Kolay anlaşılır raporlama</li>
                <li>Pafta antet hazırlama sihirbazı</li>
                <li>Pafta düzenleme editörü</li>
                <li>Hızlı ve pratik kesit alma</li>
                <li>Yapı metraj hesabı ve raporlama</li>
                <li>Proje dosyasını çift klik ile otomatik yükleme</li>
                <li>Sürükle - bırak ile proje yükleme</li>
                <li>Uygun fiyat politikası</li>
              </ol>
            </div>
            <div className="">
              <Image
                className="bg-gray-100 p-5"
                src="/assets/Images/yigma10.png"
                width={740}
                height={700}
                alt="alt"
              />
              <div className="text-sm italic w-full text-center font-bold">
                Projelerinizi yeni yönetmeliklere uygun olarak kolaylıkla
                hazırlayabilirsiniz
              </div>
              {/* Rapor örneklerinin fotoğraflarını de koy, bulut tabanlı yığma arayüzünü de koy */}
            </div>
          </div>
          <div>
            <p className="mt-8 italic">
              Fizibil yığma analizi lisanslı dosya için{" "}
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
              Fizibil yığma analizi demo dosyası için{" "}
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

          <div className="my-5 bg-blue-100 lg:py-10 py-6 lg:px-20 px-6">
            <p className="font-bold lg:py-3 py-2">
              Yığma Yazılım Fiyatlarımızı Hemen Öğrenin!
            </p>
            <p className="lg:pb-3 pb-2">
              Yığma yazılım çözümlerimizle işinizi zirveye taşımak artık daha
              erişilebilir! Size özel çözümlerimizin fiyatlarını öğrenmek için
              hemen aşağıdaki formu doldurun ve avantajlı tekliflerimizi
              kaçırmayın. İşte size özel bir deneyim yaşamak için adım adım
              rehber:
            </p>
            <ol className="list-decimal list-inside">
              <li>
                🖊️ <span className="font-bold">Formu Doldurun:</span> Formu
                doldurarak ihtiyaçlarınızı ve projenizi bizimle paylaşın.
              </li>
              <li>
                🚀{" "}
                <span className="font-bold">Özel Teklifiniz Hazır Olsun:</span>{" "}
                Bizimle paylaştığınız bilgiler doğrultusunda size özel bir
                teklif hazırlayalım.
              </li>
              <li>
                📞 <span className="font-bold">Hemen İletişime Geçelim:</span>{" "}
                Hazır teklifimizi alınca size ulaşarak detayları konuşalım ve
                projenizi birlikte şekillendirelim.
              </li>
              <li>
                🌐 <span className="font-bold">Teknolojiyle Tanışın:</span>{" "}
                Yığma yazılım çözümlerimizin gücüyle işlerinizi daha verimli ve
                yenilikçi bir şekilde yönetin.
              </li>
            </ol>
            <p className="font-bold lg:py-3 py-2 items-center">
              <Link href="/contact">
                Fiyatlar ve İletişim İçin Hemen Formu Doldurun 👉
              </Link>
            </p>
            <p className="lg:pb-3 pb-2">
              Yığma yazılımında fark yaratmak ve işinizi zirveye taşımak için
              şimdi harekete geçin. Size özel çözümlerimizi keşfetmek ve
              avantajlı fiyatlarımızı öğrenmek için formu doldurun, teknolojiyle
              dolu bir geleceğe adım atın!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yigma;
