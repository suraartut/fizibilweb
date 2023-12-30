import React from "react";

const SosyalMedya = () => {
  return (
    <div className="w-full pt-[88px] bg-[#f1f8ff]">
      {/* <div className="w-full">
        <img
          src="/assets/Images/pagebanner.jpg"
          className="w-full h-[50vh] object-cover"
        />
      </div> */}
      <div className="w-full lg:py-10 py-6">
        <div className="lg:container lg:mx-auto mx-5">
          <h2 className="text-center lg:mb-9 mb-5 lg:text-3xl text-2xl text-gray-600 pb-3">
            Sosyal Medya
          </h2>
          <div>
            <h3 className="font-bold lg:mb-6">
              İMO Bursa Şubesi&apos;nde Yığma Yapı Analizi ve Tasarımı Semineri:
              Genel Müdürümüzden Aydınlatıcı Bilgiler
            </h3>
            <div className="lg:grid grid-cols-2">
              <div className="lg:block hidden">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UiZJpvNRh-Y?si=uAJ3Hu8hTijeSX3Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="lg:hidden block lg:my-0 my-4">
                <iframe
                  width="355"
                  height="210"
                  src="https://www.youtube.com/embed/UiZJpvNRh-Y?si=uAJ3Hu8hTijeSX3Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h4>Merhaba Fizibil Ailesi,</h4>
                <p className="my-3">
                  Büyük bir gurur ve heyecanla duyuruyoruz: Genel Müdürümüz Dr.
                  Mahmud Sami DÖVEN, yığma yapıların analizi ve tasarımı
                  konusunda Türkiye İnşaat Mühendisleri Odası (İMO) Bursa
                  Şubesi&apos;nde düzenlenen seminerde konuşmacı olarak yer
                  aldı! Bu değerli anı sizinle paylaşmak ve seminerin ardındaki
                  bilgileri aktarmak için bu özel videoyu paylaşıyoruz.
                </p>
                <p>
                  Bu video, Dr. Mahmud Sami DÖVEN&apos;in seminer sırasında
                  aktardığı bilgileri içeriyor ve izleyenlere, yığma yapıların
                  analizi ve tasarımında karşılaşılan zorlukların nasıl
                  aşılabileceğine dair pratik bilgiler sunuyor. Ayrıca, Fizibil
                  ekibinin, bu alandaki en son teknolojileri ve
                  sürdürülebilirlik ilkelerini nasıl entegre ettiğini
                  göstererek, sektöre yön veren bir lider olduğunu bir kez daha
                  kanıtlıyor.
                </p>
                <p className="my-3">
                  Eğer siz de yığma yapıların analizi ve tasarımı konusunda
                  uzman bir liderin bilgilerine tanıklık etmek istiyorsanız, bu
                  videoyu kaçırmamanızı öneririz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosyalMedya;
