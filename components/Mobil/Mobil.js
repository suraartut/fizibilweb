import React from "react";
import styles from "./mobil.module.css";
import Link from "next/link";
import Image from "next/image";

const Mobil = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/mobil-banner.png"
          className="w-full lg:h-[50vh] h-[12vh] object-cover"
          alt="Mobil Programlama"
        />
      </div>
      <div className="w-full lg:my-10 my-6">
        <div className="lg:container lg:mx-auto mx-5">
          <div className="">
            <div className="lg:flex gap-20 items-center lg:text-lg">
              <div className="lg:flex hidden">
                <Image
                  src="/assets/Images/phone.jpg"
                  width={950}
                  height={950}
                  alt="Mobil Uygulama ve Programlama"
                />
              </div>
              <div className="lg:hidden block mb-3">
                <Image
                  src="/assets/Images/phone.jpg"
                  width={350}
                  height={350}
                  alt="Mobil Uygulama ve Programlama"
                />
              </div>
              <div>
                <div className="lg:mb-12 mb-6">
                  <h2 className="text-center lg:mb-2 mb-1 lg:text-3xl text-2xl font-bold">
                    <code>&quot;Mobil Dünyası&apos;na Hoş Geldiniz!&quot;</code>
                  </h2>
                  <h3 className="text-center font-bold text-xl">
                    <code>
                      <span className="text-blue-700">&lt;code&gt;</span>
                      <span className="italic"> Mobil Programlama </span>
                      <span className="text-blue-700">&lt;/code&gt;</span>
                    </code>
                  </h3>
                </div>
                <div>
                  <p className="lg:pb-3 pb-2">
                    Dijital evrimin hız kazandığı bu çağda, mobil cihazlar
                    dünyamızı şekillendiriyor. Biz, bu değişimin liderleri
                    olarak, mobil dünyanın kapılarını sizin için aralıyoruz.
                    Yazılımın gücünü taşınabilir cihazlarınızla birleştirerek,
                    işinizi ve hayatınızı daha verimli hale getiriyoruz.
                  </p>
                  <p className="font-bold lg:py-3 py-2">
                    Bizimle Geleceği Şekillendirin:
                  </p>
                  <p className="lg:pb-3 pb-2">
                    İş ortağınız olarak, mobil projelerinizde başarıya
                    ulaşmanıza yardımcı oluyoruz. Mobil dünyada fark yaratmak ve
                    işletmenizi bir üst seviyeye taşımak için bize katılın.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:my-10 my-4">
              <h2 className="lg:mb-3 mb-1 lg:text-2xl text-xl font-bold">
                Mobil Çözümlerimiz: İleriyi Düşünmek, Sizinle Şekillendirmek
              </h2>
              <p className="pt-1 pb-1 font-bold">
                iOS ve Android Uygulama Geliştirme:
              </p>
              <p className="lg:pb-4 pb-2">
                Mobil cihazlarda etkileyici ve güvenilir uygulamalar geliştirmek
                için mükemmel bir ekip ile çalışın. İşletmenizin ve
                müşterilerinizin ihtiyaçlarına yönelik özelleştirilmiş çözümler
                sunuyoruz. iOS ve Android platformlarında kapsamlı deneyime
                sahibiz.
              </p>
              <p className="pb-1 font-bold">Mobil Oyun Geliştirme:</p>
              <p className="lg:pb-4 pb-2">
                Eğlenceli ve bağımlılık yaratan mobil oyunlarla marka
                bilinirliğinizi artırın. Teknolojinin ve yaratıcılığın gücünü
                kullanarak, kullanıcılarınıza unutulmaz bir deneyim sunuyoruz.
                Oyun geliştirmenin ötesinde, bir marka deneyimini güçlendirecek
                oyunlar tasarlıyoruz.
              </p>
              <p className="pb-1 font-bold">Uygulama Güncelleme ve Bakım:</p>
              <p className="lg:pb-4 pb-2">
                Teknolojinin sürekli değişiminde güncel kalmak kritiktir.
                Uygulamalarınızı en son teknolojiye uygun ve güvenli tutmak için
                düzenli bakım ve güncellemeleri sağlıyoruz. Bu sayede,
                kullanıcılarınıza kesintisiz bir deneyim sunabilir ve rekabet
                avantajınızı sürdürebilirsiniz.
              </p>
              <p className="pb-1 font-bold">Mobil Strateji Danışmanlığı:</p>
              <p className="lg:pb-6 pb-3">
                İşletmenizin mobil stratejisini oluşturmak, uygulamak ve
                optimize etmek için size özel çözümler sunuyoruz. Kullanıcı
                taleplerini anlamak, rekabeti analiz etmek ve sektördeki güncel
                gelişmeleri takip etmek için deneyimli bir danışman ekibiyle
                çalışarak işinizi dijital dünyada güçlendirebilirsiniz.
              </p>
              <p className="font-bold py-2 text-center italic">
                Sizin İçin Mobil Çözümler Üretiyoruz!
              </p>
              <p className="pb-2 lg:w-[40%] text-center mx-auto">
                Eğer sizi dijital dünyada bir adım öne taşıyacak mobil çözümler
                arıyorsanız, doğru yerdesiniz. İşbirliği yaparak, mobil
                projelerinizde büyümenize ve başarılı olmanıza yardımcı
                oluyoruz. Haydi, birlikte mobil dünyasında iz bırakalım!
              </p>
            </div>
          </div>
          <div className="lg:mt-10">
            <h3 className="border-b border-blue-500 my-3 font-bold text-2xl text-center pb-2">
              Mobil Programlama Çözümlerimiz
            </h3>
            <div className="lg:flex">
              <div className={styles.card}>
                <div className={styles.card_black}>
                  <Image
                    src="/assets/Images/3D-CAD.png"
                    alt="Doğalgaz Sayacı Okuma Uygulaması"
                    className={styles.card_images}
                    width={350}
                    height={350}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>Doğalgaz Sayacı Okuma</h3>
                  <p className="lg:my-6 my-4">Açıklama</p>
                  <Link href="/iskele" className={styles.card_button}>
                    <span className={styles.card_button_title}>KEŞFEDİN!</span>
                    <Image
                      src="/assets/icons/right-sm.svg"
                      width={20}
                      height={20}
                      alt="right"
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card_black}>
                  <Image
                    src="/assets/Images/3D-CAD.png"
                    alt="Elektrik Sayacı Okuma Uygulaması"
                    className={styles.card_images}
                    width={350}
                    height={350}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>Elektrik Sayacı Okuma</h3>
                  <p className="lg:my-6 my-4">Açıklama</p>
                  <Link href="/e-ticaret" className={styles.card_button}>
                    <span className={styles.card_button_title}>KEŞFEDİN!</span>
                    <Image
                      src="/assets/icons/right-sm.svg"
                      width={20}
                      height={20}
                      alt="right"
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card_black}>
                  <Image
                    src="/assets/Images/3D-CAD.png"
                    alt="Statik Proje Bedeli Hesaplama"
                    className={styles.card_images}
                    width={350}
                    height={350}
                  />
                </div>
                <div className={styles.card_gray}>
                  <div className={styles.card_line}></div>
                  <h3 className={styles.card_title}>
                    Statik Proje Bedeli Hesaplama
                  </h3>
                  <p className="lg:my-6 my-4">Açıklama</p>
                  <Link href="/iskele" className={styles.card_button}>
                    <span className={styles.card_button_title}>KEŞFEDİN!</span>
                    <Image
                      src="/assets/icons/right-sm.svg"
                      width={20}
                      height={20}
                      alt="right"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobil;
