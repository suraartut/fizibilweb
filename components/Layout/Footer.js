import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerData } from "@/collections/headerData";
import Image from "next/image";
import { footerData } from "@/collections/footerData";

const Footer = () => {
  const [EBultenMail, setEBultenMail] = useState("");

  function eBultenKayit(e) {
    e.preventDefault();

    const postData2 = {};

    try {
      const { data } = axios
        .post(
          API_URL + "api/common/addnewsletter?email=" + EBultenMail,
          postData2
        )
        .then(function (response) {
          console.log("E-Bültene kayıt başarılı!");
        })
        .catch(function (error) {});
    } catch (error) {
      console.log(error);
      console.log("E-Bültene kayıt olunamadı!");
    }
  }
  return (
    <div className="bg-[#f8f9fa] relative">
      <div className="lg:mx-40 mx-8 py-14 grid lg:grid-cols-4">
        <div className="col-span-1">
          <Image
            src="/assets/Images/fizibil-logo.png"
            width={150}
            height={50}
            alt="Şirket Logosu"
          />
          <div className="w-full my-4 justify-start flex">
            Görükle Mah. Üniversite-1 Cd.
            <br /> ULUTEK Teknoloji Geliştirme Merkezi
            <br /> No:933/238 Nilüfer/BURSA
          </div>
          <div className="w-full my-4 justify-start">
            <Link href="tel:+905326467295" className="flex items-center">
              <Image
                src="/assets/icons/phone.svg"
                height={35}
                width={35}
                alt="phone"
                className="mr-1"
              />
              <span className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                +90 (532) 646 72 95
              </span>
            </Link>
            <Link href="tel:+902244428777" className="flex items-center">
              <Image
                src="/assets/icons/phone.svg"
                height={35}
                width={35}
                alt="phone"
                className="mr-1"
              />
              <span className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                +90 (224) 442 87 77
              </span>
            </Link>
          </div>
          <div className="w-full my-4 justify-start flex items-center">
            <Link
              href="mailto:destek@fizibil.com"
              className="flex items-center"
            >
              <Image
                src="/assets/icons/mail.svg"
                height={35}
                width={35}
                alt="e-mail"
                className="mr-1"
              />
              <span className="hover:text-gray-500 transition-all duration-300 ease-in-out">
                destek@fizibil.com
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-1 items-center">
          <ul className="w-full">
            {headerData?.map((item) => {
              return (
                <li key={item.id} className="w-full my-4 justify-start flex">
                  <Link href={item.link} className="links uppercase text-sm">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-1 items-center">
          <ul className="w-full">
            {footerData?.map((item) => {
              return (
                <li key={item.id} className="w-full my-4 justify-start flex">
                  <Link href={item.link} className="links uppercase text-sm">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-1 items-center">
          <div>
            <h3 className="uppercase text-sm font-bold">Haber BÜLTENİ</h3>
            <p className="text-gray-600 text-center my-5"></p>
            <form
              onSubmit={(e) => eBultenKayit(e)}
              className="flex gap-2 justify-start"
            >
              <label className="block">
                <input
                  type="email"
                  className="peer w-full h-8 p-3"
                  onChange={(e) => setEBultenMail(e.target.value)}
                  value={EBultenMail}
                  id="mail"
                  placeholder="E-posta adresiniz"
                />
                <p className="my-2 invisible peer-invalid:visible text-black text-base">
                  Lütfen geçerli bir e-mail giriniz!
                </p>
              </label>
              <button
                type="submit"
                className="block w-32 h-8 bg-black text-white items-center text-sm p-1 buton"
              >
                Kayıt Ol
              </button>
            </form>
          </div>
          <div className="social-media flex gap-5">
            <div>
              <Link href="/">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/assets/icons/twitter-x.png"
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/fizibil-muhendislik-&-yazılım/">
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="linkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/@fizibilmuhendislikyazlm514">
                <Image
                  src="/assets/icons/youtube-red.png"
                  alt="youtube"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CopyRight */}
      <div className="border-t border-gray-200">
        <div className="lg:mx-36 mx-12 py-4 items-center text-center">
          Fizibil © {new Date().getFullYear()} - Tüm Hakları Saklıdır.
        </div>
      </div>
    </div>
  );
};

export default Footer;
