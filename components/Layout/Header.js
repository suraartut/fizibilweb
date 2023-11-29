import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { childMenu, headerData, subChildMenu } from "@/collections/headerData";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import styles from "./layout.module.css";

const Header = () => {
  const router = useRouter();
  useEffect(() => {
    setshowMenu(false);
  }, [router]);

  const [showMenu, setshowMenu] = useState(false);

  const handleClick = () => {
    setshowMenu((prev) => !prev);
  };

  return (
    <header className={styles.wrapper}>
      <div className="lg:flex hidden bg-[#2e8fce] py-2 px-16 text-white grid-cols-4 justify-between items-center">
        <div className="flex gap-10">
          <Link href="tel:+902244428777" className="flex items-center">
            <Image
              src="/assets/icons/phone.svg"
              height={35}
              width={35}
              alt="phone"
              className="mr-1"
            />
            <span className="hover:text-blue-200 transition-all duration-300 ease-in-out">
              +90 (224) 442 87 77
            </span>
          </Link>
          <Link href="mailto:destek@fizibil.com" className="flex items-center">
            <Image
              src="/assets/icons/mail.svg"
              height={35}
              width={35}
              alt="e-mail"
              className="mr-1"
            />
            <span className="hover:text-blue-200 transition-all duration-300 ease-in-out">
              destek@fizibil.com
            </span>
          </Link>
        </div>
        <div className="social-media flex gap-5 items-center">
          <div>
            <Link href="/">
              <Image
                src="/assets/icons/facebook.svg"
                alt="facebook"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Image
                src="/assets/icons/twitter-x.png"
                alt="twitter"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/company/fizibil-muhendislik-&-yazılım/">
              <Image
                src="/assets/icons/linkedin.svg"
                alt="linkedIn"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.youtube.com/@fizibilmuhendislikyazlm514">
              <Image
                src="/assets/icons/youtube-red.png"
                alt="youtube"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] bg-opacity-95 shadow-bottom w-full h-[88px] lg:absolute fixed z-[100]">
        <div className={styles.header_main}>
          <div className="flex lg:hidden relative">
            <div className="flex">
              {!showMenu ? (
                <div className="space-y-1.5" onClick={handleClick}>
                  <span className={styles.hamburger}></span>
                  <span className={styles.hamburger}></span>
                  <span className={styles.hamburger}></span>
                </div>
              ) : (
                <Image
                  src="/assets/icons/close.svg"
                  alt="close"
                  width={10}
                  height={10}
                  className="w-8 h-8 text-gray-600 animate-pulse"
                  onClick={handleClick}
                />
              )}
            </div>
          </div>

          <div>
            <Link href="/">
              <Image
                src="/assets/Images/fizibil-logo.png"
                width={150}
                height={100}
                alt="Şirket Logosu"
              />
            </Link>
          </div>

          {/* Category Menu Start*/}
          <div className="lg:block hidden">
            <ul className="menu w-full flex">
              {headerData?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="catMenu w-full hover:bg-[#eaebec] transition-all duration-300 ease-in-out"
                  >
                    <Link href={item.link} className={styles.category_menu}>
                      {item.title}
                      {item.catChild > 0 && (
                        <Image
                          src="/assets/icons/dropdown.svg"
                          height={18}
                          width={16}
                          alt="dropdown"
                          className="ml-1 text-xs font-extrabold uppercase tracking-widest"
                        />
                      )}
                    </Link>

                    <ul className="dropdown lg:shadow-lg">
                      {childMenu?.map((itemChild, index) => {
                        if (item.title == itemChild.catName) {
                          return (
                            <li
                              key={index}
                              className="dropdown-menu hover:bg-[#eaebec] transition-all duration-300 ease-in-out flex"
                            >
                              <Link href={itemChild.url}>
                                {itemChild.title}
                              </Link>
                              <ul className="subMenu lg:shadow-lg">
                                {subChildMenu?.map((itemSubMenu, index) => {
                                  if (itemChild.title == itemSubMenu.catName) {
                                    return (
                                      <li
                                        key={index}
                                        className="text-black hover:bg-[#eaebec] transition-all duration-300 ease-in-out"
                                      >
                                        <Link href={itemSubMenu.url}>
                                          {itemSubMenu.title}
                                        </Link>
                                      </li>
                                    );
                                  }
                                })}
                              </ul>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Category Menu End */}

          <div>
            <ul className="w-full flex gap-5">
              <li className={styles.account}>
                <Link href="/">
                  <Image
                    src="/assets/icons/account.svg"
                    height={20}
                    width={20}
                    alt="account"
                    className="mr-1"
                  />
                </Link>
              </li>
              <li className={styles.shopping_cart}>
                <Link href="/">
                  <Image
                    src="/assets/icons/shopping-cart.svg"
                    height={20}
                    width={20}
                    alt="shopping-cart"
                    className="mr-1"
                  />
                </Link>
              </li>

              <li className={styles.language}>
                <span className="text-sm">Tr</span>
                <Image
                  src="/assets/icons/dropdown.svg"
                  height={20}
                  width={20}
                  alt="language"
                  className=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MobileHeader showMenu={showMenu} />
    </header>
  );
};

export default Header;
