import React from "react";
import Link from "next/link";
import styles from "./contact.module.css";

const ContactComponent = () => {
  return (
    <div className="w-full pt-[89px]">
      <div className="w-full">
        <img
          src="/assets/Images/contact-us.png"
          className="w-full lg:h-[61vh] h-[21vh] object-cover"
          alt="İletişi Banner"
        />
        <div className="text-center text-white absolute lg:top-[30%] top-[18%] justify-center w-full">
          <h1 className={styles.title}>BİZE ULAŞIN</h1>
          <p className="lg:text-xl text-sm">
            İleri düzey mühendislik çözümleri, özelleştirilmiş yazılım
            geliştirme ve bilişim alanındaki ihtiyaçlarınız için bize ulaşın;
            geleceğin teknolojileriyle işinizi güçlendirelim.
          </p>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.form_cart}>
          <div className={styles.first_cart}>
            <h3 className={styles.title_h3}>ARAMA TALEBİNDE BULUNUN</h3>
            <h2 className={styles.title_h2}>Size geri dönüş yapalım</h2>
            <form className="mt-8 lg:pr-10">
              <div className="lg:flex justify-end items-end">
                <label>Adınız Soyadınız: </label>
                <input type="text" className={styles.inputs} />
              </div>
              <div className="my-8 lg:flex justify-end items-end">
                <label>E-posta adresiniz: </label>
                <input type="email" className={styles.inputs} />
              </div>
              <div className="lg:flex justify-end items-end">
                <label>Mesajınız: </label>
                <textarea className={styles.inputs} />
              </div>
              <div className="w-full lg:text-end">
                <button className={styles.form_button}>GÖNDER</button>
              </div>
            </form>
          </div>
          <div className="bg-[#212529] lg:p-16 p-5">
            <h3 className={styles.title_h3}>BİR UZMAN İLE GÖRÜŞÜN</h3>
            <h2 className={styles.title_h2}>Hadi İş Konuşalım</h2>
            <p className="text-gray-300 mt-6 mb-10">
              Size sadece ihtiyacınız olan yazılımları sunuyoruz, fazlasını ya
              da eksiğini değil. İşinize yaramayan menüler içerisinde
              kaybolmanıza son. Yazılım terziniz, çözüm ortağınız olmak
              istiyoruz. Kısaca projenizden bahsediniz.
            </p>
            <div className="phone text-lg font-bold">
              Telefon: <Link href="tel:+905326467295">+90 (532) 646 72 95</Link>
            </div>
            <div className="phone text-lg font-bold">
              Telefon: <Link href="tel:+902244428777">+90 (224) 442 87 77</Link>
            </div>
            <div className="e-mail text-lg font-bold my-4">
              E-posta:{" "}
              <Link href="mailto:destek@fizibil.com">destek@fizibil.com</Link>
            </div>
            <div className="text-lg font-bold">
              Görükle Mah. Üniversite-1 Cd. ULUTEK Teknoloji Geliştirme Merkezi
              No:933/238 Nilüfer/BURSA
            </div>
            <div className="mt-10 lg:mb-0 mb-3">
              <Link href="/kurumsal" className={styles.about_button}>
                HAKKIMIZDA
              </Link>
            </div>
          </div>
        </div>

        <div className="my-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12185.529821589047!2d28.8582583!3d40.2227979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca0e2012f6bf51%3A0xa70ede31fea27808!2zRml6aWJpbCBNw7xoZW5kaXNsaWsgJiBZYXrEsWzEsW0!5e0!3m2!1str!2str!4v1692608260109!5m2!1str!2str"
            width="100%"
            height="500"
            allowfullscreen=""
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
