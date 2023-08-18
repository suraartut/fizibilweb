import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { childMenu, headerData, subChildMenu } from "@/collections/headerData";
import Image from "next/image";
import MobileHeader from "./MobileHeader";

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
    <header className="w-full h-auto z-[100] relative ">
      <div className="bg-transparent hover:bg-white transition-all duration-300 ease-in-out w-full h-24">
        <div className="lg:px-12 px-5 flex h-full items-center justify-between text-center">
          <div className="flex lg:hidden relative">
            <div className="flex">
              {!showMenu ? (
                <div className="space-y-1.5" onClick={handleClick}>
                  <span className="block w-8 h-[3px] bg-gray-700 animate-pulse"></span>
                  <span className="block w-8 h-[3px] bg-gray-700 animate-pulse"></span>
                  <span className="block w-8 h-[3px] bg-gray-700 animate-pulse"></span>
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
            <Image
              src="/assets/Images/fizibil-logo.png"
              width={150}
              height={100}
              alt="Şirket Logosu"
            />
          </div>

          {/* Category Menu Start*/}
          <div className="lg:block hidden">
            <ul className="menu w-full flex gap-10">
              {headerData?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="catMenu w-full hover:bg-[#f8f9fa] transition-all duration-300 ease-in-out"
                  >
                    <Link
                      href={item.link}
                      className="text-xs font-extrabold py-10 px-5 uppercase tracking-widest flex justify-center text-center items-center w-full"
                    >
                      {item.title}
                      <Image
                        src="/assets/icons/dropdown.svg"
                        height={18}
                        width={18}
                        alt="dropdown"
                        className="ml-1 text-xs font-extrabold uppercase tracking-widest"
                      />
                    </Link>

                    <ul className="dropdown">
                      {childMenu?.map((itemChild, index) => {
                        if (item.title == itemChild.catName) {
                          return (
                            <li
                              key={index}
                              className="dropdown-menu hover:text-gray-500 flex"
                            >
                              <Link href={itemChild.url} className="">
                                {itemChild.title}
                              </Link>
                              {/* <Image
                            className="right-arrow"
                            src="/assets/icons/right-arrow.svg"
                            alt="right-arrow"
                            height={20}
                            width={20}
                          /> */}
                              <ul className="subMenu">
                                {subChildMenu?.map((itemSubMenu, index) => {
                                  if (itemChild.title == itemSubMenu.catName) {
                                    return (
                                      <li
                                        key={index}
                                        className="text-black hover:text-gray-500"
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
              <li className="text-xs font-extrabold uppercase tracking-widest lg:flex hidden">
                <Image
                  src="/assets/icons/account.svg"
                  height={20}
                  width={20}
                  alt="account"
                  className="mr-1"
                />{" "}
              </li>
              <li className="flex text-xs font-extrabold uppercase tracking-widest">
                <Image
                  src="/assets/icons/shopping-cart.svg"
                  height={20}
                  width={20}
                  alt="shop-cart"
                  className="mr-1"
                />
              </li>

              <li className="lg:flex hidden text-xs font-extrabold uppercase tracking-widest items-center">
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
