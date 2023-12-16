import React from "react";
import styles from "./dsayac.module.css";
import Image from "next/image";

const dogalgazSayacOkuma = () => {
  return (
    <div className="w-full pt-[88px] sayac">
      <div className="w-full">
        <img
          src="/assets/Images/sayac-okuma-banner.png"
          className={styles.banner}
          alt="Sayaç Okuma"
        />
      </div>
      <div className={styles.body}>
        <div className="lg:mx-32 mx-5">
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
          <div className={styles.sayac}>
            <div className={styles.images}>
              <img
                src="/assets/Images/dogalgaz-sayac.png"
                alt="Doğalgaz Sayaç Okuma"
              />
            </div>
            <div className="col-span-2">
              <h3 className={styles.titles}>Doğalgaz Sayacı</h3>
              <p className="">
                Onbeş milyonu bulan doğalgaz abonelerinin sayaç okuma işlemleri
                manuel olarak gerçekleştirilmektedir. Okuma hatalarını ve
                maliyetlerini azaltmak, okuma hızı ve konforu arttırmak, pandemi
                döneminde mobilizasyon ve karantina alanlarına girilememesi
                problemlerini ortadan kaldırmak amacıyla geliştirilen bu projede
                gönderilen sayaç fotoğrafı üzerindeki barkod ve endeks değeri
                metne çevrilerek geri gönderilir.
              </p>
              <p className="text-gray-500 my-5">
                IOS ve/veya Android tabanlı geliştirilen uygulama ile kontrollü
                olarak çekilen sayaç fotoğrafı API’ye post edilir ve geri dönen
                barkod ve endeks değerleri kontrol edilerek ilgili kurumun veri
                tabanına gönderilir. Varsa geri dönüş verilerini görüntüler.
                Yerli ve uygun maliyetli api kullanılarak geliştirileceğinden
                yaygın kullanıma uygundur. Şirketlere özel de geliştirilebilecek
                uygulamaya birçok operasyonel inovatif ar-ge özelliği
                eklenebilir. Yerli muadili yoktur. Yabancı muadilleri kullanım
                başına yüksek fiyatlarla ücretlendirilmektedir (Anyline vs..).
                Bu ürünler Ar-ge olarak kullanılsalar da yaygın kullanım için
                fizibil değillerdir.
              </p>
            </div>
          </div>
          <div className="lg:border-l-4 border-l-2 border-[#2e8fce] lg:pl-10 pl-2 lg:ml-4">
            <ul className="sayac-list">
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                Belli ölçülerdeki sayaç resimleri sisteme daha önceden
                öğretilerek performanslı çalışma modeli
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode-phone.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                Sistem aktif çalışırken yeni sayaç öğretilerek uygulamaya dahil
                edilebilme
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                İsteğe bağlı olarak tek resimde hem barkod hem edeks okuyabilme
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode-phone.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                Okuma gerçekleşmediğinde manuel girilen data, elde edilen resim
                ile eşleştirilerek veri tabanında saklayabilme
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                API tabanlı mimari ile her türlü platforma uygulanabilme
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode-phone.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                İsteğe bağlı güvenlik için varsayımsal yaklaşım algoritması
                kurgulayabilme
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                Esnek raporlama servisleri
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode-phone.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                Sayaçların 500x300 oranda çekilmiş resim setleri yüklenerek
                sistemin imaj çözme kalitesi arttırılacaktır
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                İsteğe bağlı olarak tek resimde hem barkod hem endeks okuyabilme
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode-phone.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                Işık veya benzeri dış etkenlerden dolayı okunamayan endeks
                bilgileri için sisteme elle giriş yapılabilmektedir
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                El ile girilen her data çekilen resim ile beraber saklanır, aynı
                zamanda belirlenen periyotlarda bu resim sistem için eğitime
                tabi tutulur
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode-phone.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                Kuyruk modu , Gerçeklik Kontrolü gibi yapılar native uygulama
                üzerinde geliştirilebilir
              </li>
              <li className="flex gap-4">
                <Image
                  src="/assets/icons/barcode.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                API üzerinde firmanıza özel süreçler tasarlanarak lokal
                akışlarınıza dahil edilebilir
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SIK SORULAN SORULAR */}
      <div className="bg-blue-100 text-center lg:px-20 px-4 py-10">
        <h3 className="text-[#054a85] font-bold lg:text-3xl">
          SIK SORULAN SORULAR
        </h3>
        <div className="pt-8">
          <div class="flex flex-col w-full gap-5">
            <button class="group focus:outline-none bg-white rounded-md">
              <div class="flex items-center justify-between h-12 px-3 font-semibold hover:text-[#2e8fce]">
                <span class="truncate">
                  Cihazlardaki görüntüleri personel mi çekecek yoksa abone mi?
                </span>
                <svg
                  class="h-4 w-4 text-[#2e8fce]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-96">
                <span class="flex items-center text-start px-4 text-sm lg:py-5 py-3">
                  Cihaz görüntüsünü hem personel hem vatandaş çekebilecek. Bu
                  tamamen şirketin kullanım tercihine kalmış bir durumdur.
                  <br />• Personel kullanımı: Hali hazırda saha çalışanları
                  manuel olarak endeks değerlerini ellerindeki terminallere
                  girmektedirler. Bunun yerine bu sistemle standart mobil
                  cihazlarla hızlı şekilde değerler okunabilir. <br />• Abone
                  Kullanımı: Abone iki farklı şekilde kullanabilir. Birincisi,
                  şirketin uygun görmesi halinde dönem içerisinde istediği zaman
                  sayacından görüntüsünü şirketin uygulaması üzerinden
                  göndererek güncel fatura bedelini öğrenebilir. İkincisi ise
                  hem şirketin uygun görmesi hem de mevzuatsal düzenleme olması
                  şartıyla pandemi, karantina vs. gibi ulaşım zorluğu
                  durumlarında vatandaş uygulamayı kullanarak faturasını
                  e-fatura olarak düzenletebilir.
                </span>
              </div>
            </button>
            <button class="group focus:outline-none bg-white rounded-md">
              <div class="flex items-center justify-between h-12 px-3 font-semibold hover:text-[#2e8fce]">
                <span class="truncate">
                  Endeks değeri manuel olarak işlenebiliyorken görüntü işleme
                  tabanlı bu sisteme neden ihtiyaç var?
                </span>
                <svg
                  class="h-4 w-4 text-[#2e8fce]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-96">
                <span class="flex items-center text-start px-4 text-sm lg:py-5 py-3">
                  • Hız: birkaç saniye içerisinde hem barkod no, hem endeks
                  değeri alınabilir.
                  <br />
                  • Doğruluk; manuel okumada karşılaşılan hatalı okumalar
                  ortadan kalkar.
                  <br />
                  • Güvenlik; manuel okumalarda kasıtlı ya da sehven yapılan
                  yanlışlıklar, fotoğraf arşivlenmesi ile kontrol altına alınır.
                  <br />• Kullanılabilirlik; abone sadece uygulamadaki kadraja
                  sayacı göstererek kullanabilecektir.
                </span>
              </div>
            </button>
            <button class="group focus:outline-none bg-white rounded-md">
              <div class="flex items-center justify-between h-12 px-3 font-semibold hover:text-[#2e8fce]">
                <span class="truncate">
                  Şehven veya kasıtlı yapılabilecek hatalarda güvenlik nasıl
                  sağlanacak?
                </span>
                <svg
                  class="h-4 w-4 flex-shrink-0 text-[#2e8fce]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-96">
                <span class="flex items-center text-start px-4 text-sm lg:py-5 py-3">
                  Şehven hatalar ancak uygulamanın hatalı okuması ile mümkündür.
                  Bu risk, geliştirilen sistemde muadillerine göre oldukça
                  düşüktür. Uygulama kendi okumasını gerçekleştirdikten sonra
                  bir kontrol ekranına düşer ve son kontrolden sonra onaylanır.
                  Önceki endeks değerleri ve mevsim ortalamaları dikkate
                  alınarak bir filtreden geçirilerek alarm verilebilir. Herşeye
                  rağmen bir hata oluşmuş ise kontrolü için sadece veritabanına
                  yüklenmiş olan güncel fotoğrafın incelenmesi yeterlidir.
                  <br /> <br />
                  Kasıtlı hatalar fotoğraf üzerinde manipülasyon ile mümkündür.
                  Barkod ile endeks aynı kareden alınacağı için barkod ve endeks
                  farklı sayaçlardan okutulamaz. Çekilen fotoğrafın gerçek
                  nesneden çekildiği görüntü işleme ile mümkündür.
                </span>
              </div>
            </button>
            <button class="group focus:outline-none bg-white rounded-md">
              <div class="flex items-center justify-between h-12 px-3 font-semibold hover:text-[#2e8fce]">
                <span class="truncate">
                  Sayaçların bulunduğu yerler her zaman aydınlık yerler değil,
                  ışık kaynağı kullanmak cihazların üzerinde parlamalara neden
                  olacaktır. Bu durumda okumak sıkıntılı olacaktır. Bu konu ile
                  ilgili ne planlıyorsunuz?
                </span>
                <svg
                  class="h-4 w-4 flex-shrink-0 text-[#2e8fce]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-96">
                <span class="flex items-center text-start px-4 text-sm lg:py-5 py-3">
                  Mobil uygulamada şiddet ayarlı kamera ışığı kullanılmakta ve
                  parlama olan endekslerde görüntü işleme kullanılarak ilgili
                  resim tekrar eğitim işlemine tabii tutulmaktadır.
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dogalgazSayacOkuma;
