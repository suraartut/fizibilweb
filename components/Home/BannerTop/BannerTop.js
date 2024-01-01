import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";

const BannerTop = () => {
  return (
    <div className="lg:h-[100vh] h-[45vh] w-full pt-[88px] xl:block hidden">
      <Swiper
        loop={true}
        pagination={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {/* BİLGİSAYARLI GÖRÜ SLIDER */}
        <SwiperSlide>
          <Image
            className="slider-photo"
            src="/assets/Images/slider/bilgisayarli-goru.png"
            width={1920}
            height={950}
            alt="Görüntü İşleme"
          />
          <div className="slider w-1/3 left-[55%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">
                Görüntü İşlemenin Gücü: İnovasyon ve Mükemmellikte Lider
                Çözümler!
              </h3>
              <p className="pb-10 pt-4 text-white text-xl">
                Dijital görüntülerin elde edilerek işlenmesi ve analizini
                gerçekleştirerek gerçek dünyadan sayısal veya sembolik bilgileri
                çıktı olarak elde edebiliyoruz
              </p>
              <Link
                href="/goruntu-isleme"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                GÖRÜNTÜ İŞLEME İLE TANIŞIN
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* ELEKTRİK SAYAÇ SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/elektrik-sayac.png"
            width={1920}
            height={950}
            alt="Doğalgaz Sayaç Okuma"
          />
          <div className="slider w-1/3 left-[55%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">
                Enerji Geleceğinize Dokunun: Elektrik Sayacı Okuma, Şimdi Daha
                Akıllı, Daha Kolay!
              </h3>
              <p className="pb-10 pt-4 text-white text-xl">
                Günlük enerji yönetiminizi bir adım öteye taşıyan uygulamamızla
                tanışın. Her anınızda, her tüketiminizde bilgisayarlı görü
                teknolojisiyle elektrik sayacınızı okuyun.
              </p>
              <Link
                href="/elektrik-sayac"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                Enerjİ Tasarrufunu Keşfet
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* DOĞALGAZ SAYAÇ SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/dogalgaz-sayac.png"
            width={1920}
            height={950}
            alt="Elektrik Sayacı Okuma"
          />
          <div className="slider w-1/3 left-[4%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">
                Doğalgaz Kontrolü Parmaklarınızın Ucunda: Akıllı Görü
                Teknolojisiyle Geleceğin Enerji Deneyimini Keşfedin!
              </h3>
              <p className="pb-10 pt-4 text-white text-xl">
                Sürdürülebilirlik ve konforun bir araya geldiği yerde sizin için
                özel tasarlanan uygulamamızla tanışın. Bilgisayarlı görü
                teknolojisi sayesinde doğalgaz sayacınızı anında okuyun,
                tüketiminizi optimize edin ve enerji maliyetlerinizi düşürün.
              </p>
              <Link
                href="/dogalgaz-sayac"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                Doğalgaz Kontrolü Başlasın
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* YIĞMA ANALİZ SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/yigma-slider.png"
            width={1920}
            height={950}
            alt="Fizibil Yığma Analizi"
          />
          <div className="slider w-1/3 left-[62%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">
                Proje Güvenliğiniz İçin En İleri Teknoloji: Yığma Analiz
                Uygulamamızla Geleceği Şekillendirin!
              </h3>
              <p className="pb-10 pt-4 text-white text-xl">
                Yapısal mükemmelliği garanti altına almak için tasarlanmış
                analiz uygulamamızla tanışın. Yığma analizindeki lider
                çözümümüz, projelerinizin güvenliğini ve dayanıklılığını en üst
                düzeye çıkarır.
              </p>
              <Link
                href="/yigma"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                İlerİ Düzey Yığma ÇözümlerİNİ Keşfet
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* İSKELE ANALİZ SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/fizibil-iskele.png"
            width={1920}
            height={950}
            alt="Fizibil İskele Yazılımı"
          />
          <div className="slider w-1/3 left-[2%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">
                Yüksek Performans, Güvenli Çözümler: İskele Analiz Uygulamamızla
                İnşaat Projelerinizi Zirveye Taşıyın!
              </h3>
              <p className="pb-10 pt-4 text-white text-xl">
                Her inşaat aşamasında güvenliği bir adım öteye taşıyan analiz
                uygulamamızla tanışın. Yüksek kaliteli iskele analizi ile
                projelerinizi güçlendirin, riskleri minimize edin ve
                mükemmelliği sağlayın.
              </p>
              <Link
                href="/iskele"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                ProjelerİNİZİ İskele AnalİZİyle GüçlendİRİN
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* E-TİCARET SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/e-ticaret.png"
            width={1920}
            height={950}
            alt="Multilevel marketing özellikli e-ticaret sitesi"
          />
          <div className="slider w-1/3 left-[8%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">
                Çok Seviyeli Başarı: <br />
                E-Ticaretin Geleceği Şimdi Bir Adım Daha Yakın!
              </h3>
              <p className="pb-10 pt-4 text-white text-xl">
                E-ticaretin sınırlarını zorlayan ve başarıyı katlamak için
                tasarlanmış uygulamamızla tanışın. Çok seviyeli pazarlama
                özellikleri sayesinde kendi işinizi kurun, ürünleri pazarlayın
                ve daha fazla kazanç elde edin.
              </p>
              <Link
                href="/e-ticaret"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                MLM özellİklİ E-Tİcarete Adım At
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* ERP SLIDER */}
        <SwiperSlide>
          <Image
            src="/assets/Images/slider/ERP&CRM-slider.png"
            width={1920}
            height={950}
            alt="ERP&CRM Yazılım ve Danışmanlık"
          />
          <div className="slider w-1/3 left-[10%] absolute bg-[#2e8fce] bg-opacity-60 rounded-sm">
            <div className="py-12 px-16 text-start">
              <h3 className="font-bold text-white text-4xl">
                İleri Düzey Çözümler, Geleceğe Yönelik Çalışmalar: Kurumsal
                Kaynak Planlaması Artık Daha Etkin ve Güçlü!
              </h3>
              <p className="pb-10 pt-4 text-white text-xl">
                İş süreçlerinizi optimize etmek, verimliliği artırmak ve
                geleceğe hazırlanmak için tasarlanmış ERP hizmetimizle tanışın.
                İşletmenizi daha akıllı, daha verimli ve daha rekabetçi bir hale
                getirin. Kaynaklarınızı en iyi şekilde yönetin ve ileri düzey
                çözümlerimizle iş dünyasında öne çıkın.
              </p>
              <Link
                href="/erp"
                className="text-[#2e8fce] text-sm px-12 py-3 border-2 border-white bg-white uppercase font-semibold hover:text-white hover:border-[#2e8fce] hover:bg-[#2e8fce] tracking-wider w-full items-center transition duration-500 ease-in-out"
              >
                İlerİ Düzey ERP ÇözümlerİNİ İnceleYİN
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerTop;
