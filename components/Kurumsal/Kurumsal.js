import React from "react";
import Image from "next/image";
import styles from "./kurumsal.module.css";

const KurumsalComponent = () => {
  return (
    <div className={styles.kurumsal}>
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
              taşımayı hedefleyen firmamız; 3D CAD yazılımları, makina öğrenme
              temelli görüntü işleme yazılımları, multilevel marketing özellikli
              e-ticaret yazılımları, ERP yazılımları, SAP NonSAP yazılım ve
              danışmanlık hizmetleri, masaüstü, web ve mobil platformlar gibi
              geniş bir yelpazede proje ve hizmet sunmaktadır.
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
      <div className={styles.vizyon}>
        <div className="lg:mb-0 mb-8 lg:w-1/2">
          <h2 className={styles.titles}>Vizyonumuz</h2>
          <p className="my-4 italic">“Akademiden sektöre..”</p>
          <p className="my-2">
            Kurucu idarenin sahip olduğu akademik birikimi kullanarak
            mühendislik, yazılım ve teknoloji alanlarında yenilikçi, fark
            oluşturan çözümler sunmak, geliştirmek, ürün ve hizmetleri
            millileştirmek ve kolaylıklar sağlamak, Türkiye ve dünya ölçeğinde
            öncü konuma erişmek.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h2 className={styles.titles}>Misyonumuz</h2>
          <p className="my-4 italic">“Sıradışı problem, sıradışı çözüm”</p>
          <p className="my-2">
            Yazılım, mühendislik ve teknoloji alanlarında rutin ve sıradışı
            problemlere çözüm üretmek üzere akademik birikim kullanılarak
            inovasyon odaklı ürün ve hizmetler geliştirmek.
          </p>
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
      <div className="my-10 container mx-auto lg:flex justify-around">
        <div className="text-center">
          <Image
            src="/assets/Images/Fizibil-ISO-9001.jpg"
            width={280}
            height={160}
            alt="alt"
          />
          <div className="text-sm italic w-full text-center">
            Fizibil ISO 9001 Belgesi
          </div>
        </div>
        <div className="text-center">
          <Image
            src="/assets/Images/Fizibil-ISO-14001.jpg"
            width={280}
            height={160}
            alt="alt"
          />
          <div className="text-sm italic w-full text-center">
            Fizibil ISO 14001 Belgesi
          </div>
        </div>
        <div className="text-center">
          <Image
            src="/assets/Images/Fizibil-ISO-27001.jpg"
            width={280}
            height={160}
            alt="alt"
          />
          <div className="text-sm italic w-full text-center">
            Fizibil ISO 27001 Belgesi
          </div>
        </div>
      </div>
    </div>
  );
};

export default KurumsalComponent;
