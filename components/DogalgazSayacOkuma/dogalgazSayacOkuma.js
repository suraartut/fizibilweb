import React from "react";
import styles from "./dsayac.module.css";
import Image from "next/image";

const dogalgazSayacOkuma = () => {
  return (
    <div className="w-full pt-[88px] listimage">
      <div className="w-full">
        <img
          src="/assets/Images/dogalsayaçokuma2.png"
          className={styles.banner}
          alt="Sayaç Okuma"
        />
      </div>
      <div className={styles.body}>
        <div className="lg:mx-32 mx-5">
          {/* <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            Sayaç Okuma Sistemi
          </h2> */}
          <p className="text-lg pt-2 lg:pb-4">
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
              <h3 className={styles.titles}>Doğalgaz Sayacı Okuma</h3>
              <p className="">
                Tarafımızca geliştirilen Yapay Zekâ ve Görüntü işleme algoritma
                ve yazılımları ile mobil cihazlar (akıllı telefonlar) için bir
                mobil uygulamaya dönüştürülmesi ile, tüm mobil cihazlar (Android
                ve iOS), manuel doğalgaz sayaçların endeks bilgilerini ve sayaç
                seri numarasını içeren barkod bilgisiyle beraber döndüren,
                uygulama ile alınan görüntüden otomatik olarak anlık okuma
                yapabilecek sayaç okuma cihazlarına çevrilebilecektir.
              </p>
              <p className="lg:mt-4 mt-2">
                Yerli muadili yoktur. Yabancı muadilleri kullanım başına yüksek
                fiyatlarla ücretlendirilmektedir (Anyline vs..). Bu ürünler
                Ar-ge olarak kullanılsalar da yaygın kullanım için fizibil
                değillerdir.
              </p>
              <p className="text-gray-500 my-5 italic">
                Yerli ve uygun maliyetli olarak geliştirildiğinden dolayı yaygın
                kullanıma uygundur. Şirketlere özel de geliştirilebilecek
                uygulamaya birçok operasyonel inovatif ar-ge özelliği
                eklenebilir.
              </p>
            </div>
          </div>

          {/* Sayaçlar Nasıl Okunur? */}
          <div className="lg:flex justify-center gap-10 items-center lg:my-6 bg-gray-100 py-2">
            <div className="items-center lg:mr-5">
              <p className="font-bold text-xl lg:py-3 py-2">
                Sayaçlar Yapay Zekâ ile Nasıl Okunur?
              </p>
              <ul className="goruntu-isleme lg:pb-3 pb-2">
                <li className=" border-l-4 border-[#2e8fce] pl-5">
                  Kişi mobil cihaz kamerasını sayaca tutar.
                </li>
                <li className=" border-l-4 border-[#2e8fce] pl-5">
                  Sayacın dijital görüntüsü elde edilir.
                </li>
                <li className=" border-l-4 border-[#2e8fce] pl-5">
                  Görüntü bilgisayarlı görü ile işlenir ve analiz edilir.
                </li>
                <li className=" border-l-4 border-[#2e8fce] pl-5">
                  Sayaç seri numarası ve endeks verileri çıktı olarak alınır.
                </li>
              </ul>
            </div>
            <div className="flex">
              <Image
                src="/assets/Images/dsayac-nasil-1.jpg"
                alt="Doğalgaz sayacı"
                width={130}
                height={130}
              />
              <Image
                src="/assets/Images/dsayac-nasil-2.jpg"
                alt="Doğalgaz sayacı"
                width={130}
                height={130}
                className="mx-5"
              />
              <Image
                src="/assets/Images/dsayac-nasil-3.jpg"
                alt="Doğalgaz sayacı"
                width={130}
                height={130}
              />
            </div>
          </div>

          {/* Gerekçe ve Temel Özellikler */}
          <div className="lg:my-10 my-4">
            <p className="font-bold text-xl lg:py-4 py-2">
              Gerekçe ve Temel Özellikler
            </p>
            <p>
              Milyonlarca doğalgaz abonelerinin sayaç okuma işlemleri manuel
              olarak gerçekleştirilmektedir.{" "}
            </p>
            <p className="lg:mt-4 mt-2">
              Okuma hatalarını azaltma, okuma hızı ve konforunu arttırma, okuma
              maliyetlerini azaltma
            </p>
            <p className="lg:mt-4 mt-2">
              Dönem ortasında yaklaşık fatura bedeli öğrenme aracı (Aylık
              düzenlenen fatura bedelleri dönemsel olarak hane bütçesinde önemli
              yer tutmaktadır)
            </p>
            <p className="lg:mt-4 mt-2">
              Mevzuat uygun olursa beyan ile faturalandırma alt yapısı (Pandemi
              döneminde mobilizasyon problemi ve karantina alanlarına
              girilememesi durumlarında)
            </p>
            <p className="lg:mt-4 mt-2">
              Aboneler şirket için geliştirilen mobil uygulamayla akıllı
              telefonlarına yüklediklerinde abone numaraları ile kayıtlı telefon
              numaraları üzerinden sms veya başka bir doğrulama metodu ile
              güvenli bir şekilde abonelik bilgilerine ulaşabilecektir. Abone
              telefon kamerasını sayaç üzerine tutarak Yapay Zekâ ile ilgili
              endeks ve sayaç seri numarasını içeren barkod bilgilerini otomatik
              okutarak sisteme yükleyebilecek, faturasını talep edebilecek,
              dilerse ödemesini online olarak gerçekleştirebilecektir.
            </p>
            <p className="lg:mt-4 mt-2">
              Görüntünün yapay zeka ile canlılık tespiti ve önceki endeks
              bilgileri çapraz doğrulama algoritmaları ile abonelerin doğru bir
              şekilde sayaçlarını çektiklerinden emin olunabilmektedir. Yapay
              zekânın okuma yaptığı endekslerin bilgileri ve ilgili sayaç
              görseli kontrol için şirket sunucularına gerekli görüldüğü
              taktirde yollanabilir. Okumalarını zamanında yapmayan
              kullanıcılar, uygulama pop-upları veya diğer dijital kanallardan
              hatırlatmalar yolu ile sayaç okunmalarını yapmalarının
              sağlanabileceği düşünülmektedir.
            </p>
            <p className="lg:mt-4 mt-2">
              Endeks bilgileri kamera görüntüsünden geliştirilmiş olan derin
              öğrenme nesne tanıma algoritması ile tespit edilebilmektedir.
              Nesne tanıma ile endeks etiketine göre sayaç bilgisi de tespit
              edilebilmektedir. Alınan sayaç bilgisi ilgili endeks bilgisi
              etiketi ile geliştirilen OCR yardımıyla okutularak hızlı bir
              şekilde eş zamanlı olarak döndürülebilmektedir.
            </p>
            <p className="lg:mt-4 mt-2">
              Mobil cihazların uygulamaya entegre cihaz kameraları vasıtası ile
              manuel sayaçların kameranın görüntü akışı içerisinde endeks değeri
              otomatik ve eş zamanlı olarak manuel gösterge üzerinden anlık
              tespit edilebilir ve sayaç üzerindeki seri numaralarını içeren
              barkod bilgisi ile Yapay Zekâ sayesinde tespit edildiği an okuma
              yapabilir. Böylece otomatik okunan değerler mobil cihazın veri
              tabanında tutulabilmesinin yanında, paylaşılmak üzere, kablosuz
              haberleşme yöntemleriyle anında şirketin veri depolama ve
              faturalandırma sistemlerine yollanabilir.
            </p>
            <div className="lg:flex justify-around lg:my-8 lg:mx-24">
              <Image
                className="mx-auto lg:my-0 my-4"
                src="/assets/Images/dogalgaz-sayac-okut.png"
                alt="Dogalgaz sayacı okutma"
                width={170}
                height={120}
              />
              <Image
                className="mx-auto lg:my-0 my-3"
                src="/assets/Images/elektrik-sayac2.jpeg"
                alt="Dogalgaz sayacı okutma"
                width={360}
                height={110}
              />
            </div>
            <p className="lg:mt-4 mt-2">
              Işık veya benzeri dış etkenlerden dolayı okunamayan endeks
              bilgileri için sisteme elle giriş yapılabilmektedir. El ile
              girilen her data çekilen resim ile beraber saklanır, aynı zamanda
              belirlenen periyotlarda bu resim sistem için eğitime tabi tutulur.
            </p>
            <p className="lg:mt-4 mt-2">
              Kodlanmış otomatik barkod okuyucu ile görüntü akışından otomatik
              olarak barkod bilgisi ve sayaç seri numarası eş zamanlı tespit
              edilebilmekte bu sayede hangi sayacın hangi aboneye ait olduğu
              bilgisi ile ilişkilendirilen veri ile sayacın ilgili aboneye ait
              olup olmadığı kontrol edilebilecektir. Bu noktada tasarlanan mobil
              uygulamanın bir API ile haberleşerek mi yoksa mobil cihaz üzerinde
              native (yerel) olarak mı koşturulacağı müşterinin tercihlerine
              göre belirlenecektir.
            </p>
            <div className="lg:flex gap-12">
              <div>
                <p className="lg:mt-4 mt-2">
                  Şirketin genel olarak uygulamada nasıl bir mimari istediği
                  kavramsal tartışmalardan sonra tespit edilecek ve o doğrultuda
                  geliştirmeler devam edecektir. API olarak tasarlanacaksa model
                  sunucu üzerinde koşturulacak şekilde geliştirilerek, gerekli
                  geliştirmeler bu doğrultuda devam edecektir.
                </p>
                <p className="lg:mt-4 mt-2">
                  Native olarak tasarlanan eğitilmiş Yapay Zekâ modeli mobil
                  cihazlar için uygun olarak optimize edilmiştir. Bu sayede
                  mobil cihazların işlemcilerine uyarlanan Yapay Zekâ native
                  olarak mobil cihazlarda herhangi bir internet bağlantısına
                  gerek kalmadan hızlı bir şekilde cihaz üzerinde
                  çalışabilmektedir.
                </p>
                <p className="lg:mt-4 mt-2">
                  Android ve IOS (müşteri taleplerine göre) cihazlar için kamera
                  entegrasyonu, Yapay Zekâ entegrasyonu veya API ile
                  haberleşecek modüller sonradan eklenecektir. Müşteri istekleri
                  doğrultusunda arayüz tasarımları yapılarak mobil uygulamaya
                  entegre edilebilmektedir. Okuma gerçekleşmediğinde manuel
                  girilen data, elde edilen resim ile eşleştirilerek veri
                  tabanında saklayabilme.
                </p>
                <p className="lg:mt-4 mt-2">
                  API tabanlı mimari ile her türlü platforma uygulanabilme.
                  (Sistem API tabanlı mimaride tercih edildiğinde IOS, Android,
                  Windows ve WEB platformlarında rahatlıkla
                  kullanılabilmektedir.)
                </p>
                <p className="lg:mt-4 mt-2">
                  Kuyruk modu, Gerçeklik Kontrolü gibi yapılar native uygulama
                  üzerinde geliştirilebilir.
                </p>
                <p className="lg:mt-4 mt-2 font-bold">
                  Firmanıza özel süreçler tasarlanarak lokal akışlarınıza dahil
                  edilebilir.
                </p>
              </div>
              <div>
                <Image
                  className="mt-2"
                  src="/assets/Images/dogalgaz-sayac-tescil.jpg"
                  alt="Doğalgaz Sayacı Okuma Tescil Belgesi"
                  width={650}
                  height={750}
                />
                <div className="text-sm italic w-full text-center">
                  Doğalgaz Sayacı Okuma Tescil Belgesi
                </div>
              </div>
            </div>
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
