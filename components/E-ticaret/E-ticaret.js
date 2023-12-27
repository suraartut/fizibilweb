import React from "react";
import Link from "next/link";
import styles from "./eticaret.module.css";
import Image from "next/image";

const Eticaret = () => {
  return (
    <div className="w-full pt-[88px] listimage">
      <div className="w-full">
        <img
          src="/assets/Images/mlm-etic-banner.png"
          className="w-full lg:h-auto h-[15vh]"
          alt="E-ticaret"
        />
      </div>
      <div className={styles.main_container}>
        <div className="lg:mx-32 mx-5">
          <h2 className={styles.title}>MLM Özellikli E-Ticaret Portalı</h2>
          <p className="text-lg">
            Firmanın yada kişinin internet üzerinden ürün satış sitesine
            e-ticaret sitesi denir. E-ticaret sitesi yada diğer ismiyle sanal
            market sitelerini yaptırken e-ticaret sitesi kuran firmalar içinde
            referansları kuvvetli ve hazır e-ticaret yazılımı kullandırmayan,
            kendi bünyesinde yazılımcı kadrosunu daima barındıran internet
            yazılım firmalarını tercih edin.
          </p>
          <p className="my-5 text-lg">
            Son yıllarda firma sayısının artışı aynı zamanda rekabet ortamının
            da artmasına sebep olmuştur. Firmalar satışlarını daha fazla
            artırmak için e-ticaret yöntemine başvurmuşlardır. Böylece firma
            müşterilerine hem ürün satışı yapacak hem ürün yelpazesini sunacak
            hem de ürün fiyatları hakkında alıcılara interaktif ortamda ulaşmış
            olacak. İşte bu sistemi destekleyen yapıya E-ticaret programları
            diyoruz. E- ticaret sitesi sayesinde firmanızın internet ortamında
            istediği ürününü hem tanıtabilir hem de reklamını yapabilirsiniz.
          </p>
          <div className="lg:flex justify-between">
            <div>
              <p className={styles.paragraph}>
                MLM e-ticaret yazılımlarımızın içerisinde bulunan modüllerin
                bazıları şu şekildedir:
              </p>
              <ol className="list-disc mx-5">
                <li>
                  Sponsor linki veya sponsor numarası bilgisi ile arama
                  yapılarak ağaca kayıt olma / kayıt etme
                </li>
                <li>Alt üyelerin bulunduğu, üye ağacının görüntülenmesi</li>
                <li>Geçmiş dönem üye ağaç tarihçelerinin görüntülenmesi</li>
                <li>
                  Alt üyelerin ad, soyad, kullanıcı adı vs. gibi bilgilerle
                  filtrelenerek listelenmesi
                </li>
                <li>
                  Tarif edilen kazanç planına göre kazanılan puan ve primlerin
                  görüntülenmesi
                </li>
                <li>
                  Bu puan ve primlerin nesil ve kullanıcı bazında ayrıntılı
                  gösterimi
                </li>
                <li>Geçmiş dönemlerdeki puan ve primlerin gösterimi</li>
              </ol>
              <p className={styles.paragraph}>
                Diğer platform modülleri ve özellikleri için{" "}
                <span className="text-blue-500">
                  <Link
                    href="/assets/File/e-ticaret-modules.pdf"
                    download="e-ticaret-modules"
                  >
                    tıklayınız
                  </Link>
                </span>
                .
              </p>
            </div>
            {/* <div>
              <Image
                src="/assets/Images/mlm-780x840.png"
                width={280}
                height={280}
                alt="mlm e-ticaret"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eticaret;
