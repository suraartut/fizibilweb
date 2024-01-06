import React from "react";

const Erp = () => {
  return (
    <div className="w-full pt-[88px]">
      <div className="w-full">
        <img
          src="/assets/Images/erp-banner.png"
          className="w-full lg:h-auto h-full"
          alt="ERP & CRM Banner"
        />
      </div>
      <div className="lg:container lg:mx-auto mx-5 lg:my-10 my-5">
        <div className="">
          {/* <h2 className="text-center lg:mb-9 mb-5 lg:text-3xl text-2xl font-bold pb-3">
            ERP & CRM
          </h2> */}
          <p className="font-bold italic text-lg text-center">
            Kurumsal dünyanın hızla evrildiği bu dönemde, işletmenizin rekabet
            avantajını artırmak ve büyümek için doğru adımları atmaya hazır
            mısınız? İşletmenizin potansiyelini keşfedin, rekabet avantajınızı
            artırın! <span className="text-[#2e8fce]">Fizibil,</span>{" "}
            işletmenizin başarılı bir geleceğe giden yolculuğunda sizinle
            birlikte ilerliyor!
          </p>
        </div>

        {/* SAP S4 HANA */}
        <div className="lg:grid grid-cols-3 lg:gap-10 items-center lg:my-14 my-6">
          <div className="lg:col-span-2">
            <h3 className="lg:text-5xl text-3xl font-bold italic text-[#2e8fce]">
              SAP S4 HANA
            </h3>
            <h4 className="lg:mt-5 font-bold text-[#1b4058] text-xl">
              Akıllı ERP Yazılımları
            </h4>
            <p className="my-5 italic">
              Akıllı ERP (Enterprise Resource Planning) çözümleri, geleneksel
              ERP sistemlerine yapay zeka (AI), makine öğrenimi (ML), büyük veri
              analitiği ve diğer yeni nesil teknolojilerin entegre edilmesiyle
              daha zeki ve adaptatif bir şekilde çalışan iş süreçleri yönetimi
              yazılım sistemleridir.
            </p>
            <p>
              Fizibil&apos;in uzman danışman kadrosu ile SAP süreçlerinize güç
              katın. Fizibil&apos;in uzman kadrosuyla:
            </p>
            <ul className="listimage mt-5">
              <li>Otonom iş süreçleriniz geliştirebilir,</li>
              <li className="py-2">
                Gerçek zamanlı analitik verilere ulaşabilir,
              </li>
              <li>Esnek ve hızlı çözümler geliştirebilir,</li>
              <li className="py-2">
                Kullanıcı dostu arayüzler ile verim elde edebilir,
              </li>
              <li>
                Tahmin ve planlama yetenekleri sayesinde optimum verimliliği
                sağlayabilir,
              </li>
              <li className="py-2">
                Mobil uygulamalar ile iş süreçlerinizi dilediğiniz yerlere
                taşıyabilirsiniz.
              </li>
            </ul>
          </div>
          <div className="">
            <img
              src="/assets/Images/erp-sap-s4.png"
              className="w-full lg:h-1/2 h-full"
              alt="Neden SAP PM (BAKIM ONARIM)?"
            />
          </div>
        </div>

        {/* SAP C4 HANA */}
        <div className="lg:grid grid-cols-3 lg:gap-10 items-center lg:my-20 my-6">
          <div className="lg:my-0 my-5">
            <img
              src="/assets/Images/erp-sap-c4.png"
              className="w-full lg:h-1/2 h-full"
              alt="Neden SAP PM (BAKIM ONARIM)?"
            />
          </div>
          <div className="lg:col-span-2">
            <h3 className="lg:text-5xl text-3xl font-bold italic text-[#1b4058]">
              SAP C4 HANA
            </h3>
            <p className="my-5 italic">
              SAP Customer Experience (SAP CX), SAP&apos;nin müşteri deneyimi
              odaklı yazılım ürünlerini içeren bir portföyüdür. SAP C/4HANA, bu
              müşteri deneyimi çözümlerinin bir parçasıdır. SAP C/4HANA, müşteri
              ilişkileri yönetimi (CRM), ticaret, pazarlama, satış ve müşteri
              hizmetleri gibi alanlarda çeşitli modüller sunar. Bu modüller,
              işletmelerin müşteri odaklı süreçleri daha etkili bir şekilde
              yönetmelerine yardımcı olur.
            </p>
            <p>Fizibil&apos;in C4 deneyimiyle:</p>
            <ul className="listimage mt-5">
              <li>
                <span className="font-bold">SAP Marketing Cloud: </span>
                Müşteri verilerini analiz ederek pazarlama stratejilerinizi
                geliştirebilirsiniz. Kişiselleştirilmiş pazarlama kampanyaları
                oluşturabilir ve müşteri etkileşimlerinizi artırabilirsiniz.
              </li>
              <li className="py-2">
                <span className="font-bold">SAP Commerce Cloud: </span>
                Çevrimiçi ticaret için bir platform sağlar. Web sitesi yönetimi,
                ürün kataloğu yönetimi, alışveriş sepeti işlemleri gibi
                e-ticaret süreçlerinizi optimize edebilirsiniz.
              </li>
              <li>
                <span className="font-bold">SAP Sales Cloud: </span>
                Satış süreçlerini yönetir ve satış ekibinin müşteri
                ilişkilerinizin güçlendirmesine yardımcı olur.
              </li>
              <li className="py-2">
                <span className="font-bold">SAP Service Cloud: </span>
                Müşteri hizmetleri yönetimini destekler. İşletmelerin müşteri
                taleplerini etkili bir şekilde takip etmelerini, hızlı yanıtlar
                vermelerini ve müşteri memnuniyetinizin artırmasını sağlar.
              </li>
              <li>
                <span className="font-bold">SAP Customer Data Cloud: </span>
                Müşteri kimlik yönetimi ve veri koruma çözümleri sunar. Müşteri
                verilerinizi güvenli bir şekilde yönetip uyumluluk içerisinde
                gereksinimlerinizi karşılamanızı sağlar.
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="lg:grid grid-cols-2 lg:mt-12 text-lg listimage">
          <div>
            <h4 className="font-bold mb-2 lg:mt-0 mt-4">ERP Çözümleri</h4>
            <li>İş süreçlerinizi entegre ederek verimliliği artırın.</li>
            <li>
              Finans yönetiminden stok takibine kadar kapsamlı çözümler
              sunuyoruz.
            </li>
          </div>
          <div>
            <h4 className="font-bold mb-2 lg:mt-0 mt-4">CRM Danışmanlığı</h4>
            <li>
              Müşteri ilişkilerinizi güçlendirerek satış performansınızı
              artırın.
            </li>
            <li>
              Müşteri deneyimini optimize ederek sadık müşteri kitlenizi
              oluşturun.
            </li>
          </div>
        </div> */}

        {/* ERP ENTEGRASYONLARI BBAŞLIK VE GÖRSEL */}
        <div className="text-center lg:mb-8 mb-4 lg:mt-16 mt-8 lg:text-5xl text-3xl font-bold">
          <div className="lg:my-2 text-[#2e8fce]">
            İSTEDİĞİNİZ ANDA İSTEDİĞİNİZ YERDEN
          </div>
          <div className="italic text-[#1b4058]">İŞİNİZE HAKİM OLUN!</div>
        </div>
        <div className="">
          <img
            src="/assets/Images/erp-entegrasyonlar.png"
            className="w-full lg:h-auto h-full"
            alt="ERP&CRM entegrasyonlar"
          />
        </div>
      </div>

      {/* SAP IS-U */}
      <div className="bg-blue-100 lg:mt-10 lg:py-16 py-5">
        <div className="lg:container lg:mx-auto mx-5 lg:grid grid-cols-4 lg:gap-10 items-center">
          <div className="lg:col-span-3">
            <h3 className="lg:text-5xl text-3xl font-bold italic text-[#1b4058]">
              SAP IS-U
            </h3>
            <p className="my-5 lg:mr-20 italic">
              SAP IS-U (Industry Solutions for Utilities), enerji sektöründeki
              şirketlerin iş süreçlerini yönetmek ve optimize etmek amacıyla SAP
              tarafından geliştirilmiş bir endüstri çözümüdür. SAP IS-U, enerji
              ve hizmet şirketlerinin işlemlerini entegre bir şekilde
              yönetmelerine yardımcı olan bir yazılım paketidir. SAP IS-U,
              enerji sektöründeki şirketlerin operasyonel verimliliği
              artırmalarına, müşteri hizmetlerini iyileştirmelerine ve endüstri
              spesifik gereksinimlere uygun çözümler sunmalarına yardımcı olur.
            </p>
            <p>
              Fizibil&apos;in alanında uzman ekibiyle SAP IS-U&apos;nun temel
              özellikleri arasında olan:
            </p>
            <ul className="listimage mt-5">
              <li>
                <span className="font-bold">
                  Müşteri İlişkileri Yönetimi (CRM):{" "}
                </span>
                Müşteri bilgilerini yönetme, faturalandırma süreçlerini optimize
                etme ve müşteri hizmetlerini iyileştirme yeteneklerini
                kazanabilir,
              </li>
              <li className="py-2">
                <span className="font-bold">Faturalandırma ve Tahsilat: </span>
                Elektrik, su, gaz gibi hizmetlerin faturalandırılması, tüketim
                verilerinin takibi ve tahsilat süreçlerini yönetebilir,
              </li>
              <li>
                <span className="font-bold">Servis Yönetimi: </span>
                Arıza ve bakım yönetimi, saha hizmetleri planlama, ekip yönetimi
                gibi servis süreçlerini en iyi şekilde destekleyebilir,
              </li>
              <li className="py-2">
                <span className="font-bold">
                  Enerji Tedarik Zinciri Yönetimi:{" "}
                </span>
                Enerji üretimi, dağıtımı, satışı ve tüketimi gibi tedarik
                zinciri süreçlerini entegre bir şekilde yönetebilir,
              </li>
              <li>
                <span className="font-bold">Analitik ve Raporlama: </span>
                Veri analizi ve raporlama yetenekleri ile işletmenize geniş bir
                görünüm sağlayabilirsiniz.
              </li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-4">
            <img
              src="/assets/Images/erp-sapis-u.jpg"
              className="w-full lg:h-1/2 h-full"
              alt="Neden SAP PM (BAKIM ONARIM)?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erp;
