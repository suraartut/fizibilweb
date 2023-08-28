import React from "react";
import Image from "next/image";
import styles from "./kurumsal.module.css";

const KurumsalComponent = () => {
  return (
    <div className={styles.kurumsal}>
      <h1 className={styles.kurumsal_title}>KURUMSAL</h1>
      <div className={styles.about_us_body}>
        <div className="lg:flex gap-16">
          <Image
            src="/assets/Images/ulutek.jpg"
            width={600}
            height={400}
            alt="Fizibil Hakkımızda"
            className="lg:my-0 my-5"
          />
          <div>
            <h2 className={styles.titles}>Hakkımızda</h2>
            <p className={styles.first_paragraph}>
              Fizibil Mühendislik Yazılım Bilişim İnşaat Danışmanlık İthalat
              İhracat Sanayi Ve Ticaret Limited Şirketi, özel problemlere özgü
              butik yazılım geliştiren ve mühendislik çözümlemeleri üreten Bursa
              Uludağ Üniversitesi merkezli bir Teknokent Yazılım firmasıdır.
            </p>
            <p>
              Farklı mühendislik disiplinlerini bir arada kullanarak etkin
              çözümler üreten ve mevcut çözümlemeleri de daha ileri bir noktaya
              taşımayı hedefleyen firmamız; inşaat mühendisliğinden harita
              mühendisliğine kadar, geniş bir yelpazede proje ve hizmet
              sunmaktadır.
            </p>
            <p className="my-5">
              Çözümlemelerimiz yalnızca problem odaklı değildir. Sektörün
              geneline hitap eden yazılımların yanı sıra firmalara özgü kurumsal
              yazılım projeleri de geliştirebilmektedir. Geliştirme ortamlarımız
              belirli bir platforma ve programlama diline bağlı kalmayıp
              problemin çözümüne yönelik en uygun geliştirme ortamı
              kullanılmaktadır.
            </p>
            <p>
              Fizibil Mühendislik & Yazılım, akademik bilgi ve tecrübe ile reel
              sektörde yeni bir soluk, yeni bir boyut kazandırmak ve
              karşılaşılan mevcut sorunları aşmak için projeler üretmekte olup
              bu alandaki çalışmalarına da devam etmektedir.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.why_fizibil}>
        <div className={styles.why_fizibil_title}>
          <h2 className={styles.titles}>Üç Adımda Neden Fizibil?</h2>
        </div>
        <div className={styles.why_fizibil_container}>
          <div className={styles.cards}>
            <div className={styles.white_card}>
              <div>
                <Image
                  src="/assets/icons/ekonomik.svg"
                  width={80}
                  height={80}
                  className="mx-auto"
                  alt="ekonomik"
                />
                <h3 className={styles.card_title}>Ekonomİk</h3>
              </div>
              <div className={styles.blue_line}></div>
              <p>
                Çözümlemelerimizde, işin ölçeğine bağlı olarak hazırlanacak mali
                plan ile proje bütçelerini zorlamayacak aşamalı iş planı
                sunmaktayız.
              </p>
            </div>
            <div className={styles.blue_card}>
              <div>
                <Image
                  src="/assets/icons/guncel.svg"
                  width={80}
                  height={80}
                  className="mx-auto"
                  alt="güncel"
                />
                <h3 className={styles.card_title}>Güncel</h3>
              </div>
              <div className={styles.white_line}></div>
              <p>
                Gelişen yazılım mimarilerini, dillerini ve altyapı
                teknolojilerini etkin bir şekilde takip ederek projelerimizde
                uygulamaktayız.
              </p>
            </div>
            <div className={styles.white_card}>
              <div className="">
                <Image
                  src="/assets/icons/kullanici-dostu.svg"
                  width={80}
                  height={80}
                  className="mx-auto"
                  alt="kullanıcı dostu"
                />
                <h3 className={styles.card_title}>Kullanıcı Dostu</h3>
              </div>
              <div className={styles.blue_line}></div>
              <p>
                Projelerimizde, kullanıcıları ve kullanıcı alışkanlıklarını
                merkez alarak tasarlanan grafik arayüz birim ile kullanım
                verimliliği sağlamaktayız.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vizyon}>
        <div className="lg:mb-0 mb-5">
          <h2 className={styles.titles}>Vizyonumuz</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            veritatis laudantium totam officia fugit necessitatibus
            reprehenderit, aut modi tempora, voluptatibus facere error quo dolor
            sed consectetur est provident incidunt laboriosam.
          </p>
        </div>
        <div>
          <h2 className={styles.titles}>Misyonumuz</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste
            quidem fuga harum nobis, sed vitae eius ipsam necessitatibus
            reprehenderit soluta itaque in illo veniam aliquam optio iusto
            ratione. Nesciunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default KurumsalComponent;
