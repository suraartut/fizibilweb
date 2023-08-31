import React from "react";
import Link from "next/link";

const Eticaret = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img src="/assets/Images/sayacokuma1903500.png" className="w-full" />
      </div>
      <div className="w-full lg:container lg:mx-auto my-10">
        <div className="lg:mx-32 mx-5">
          <h2 className="text-center lg:w-1/4 lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 border-b-2 border-[#2e8fce] pb-3">
            MLM E-ticaret Sitesi
          </h2>
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
          <div>
            <p className="text-lg my-3">
              MLM e-ticaret yazılımlarımızın içerisinde bulunan modüllerin
              bazıları şu şekildedir:
            </p>
            <ol className="list-disc mx-5">
              <li>
                Sponsor linki veya sponsor numarası bilgisi ile arama yapılarak
                ağaca kayıt olma / kayıt etme
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
            <p className="text-lg my-3">
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
        </div>
      </div>
    </div>
  );
};

export default Eticaret;
