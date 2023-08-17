import React, { useState } from "react";
import Link from "next/link";
import { childMenu, headerData, subChildMenu } from "@/collections/headerData";
import Image from "next/image";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const handleClick = () => {
    setshowMenu((prev) => !prev);
  };

  const [category, setCategory] = useState(false);
  const handleClick2 = () => {
    setCategory((prev) => !prev);
  };

  return (
    <header className="w-full h-auto z-[100] relative">
      <div className="bg-transparent hover:bg-white transition-all duration-300 ease-in-out w-full h-24">
        <div className="px-10 flex h-full items-center justify-between text-center">
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
              <li className="flex text-xs font-extrabold uppercase tracking-widest">
                <Image
                  src="/assets/icons/account.svg"
                  height={18}
                  width={18}
                  alt="account"
                  className="mr-1"
                />{" "}
              </li>
              <li className="flex text-xs font-extrabold uppercase tracking-widest">
                <Image
                  src="/assets/icons/shopping-cart.svg"
                  height={18}
                  width={18}
                  alt="shop-cart"
                  className="mr-1"
                />
              </li>

              <li className="flex text-xs font-extrabold uppercase tracking-widest">
                TR
                <Image
                  src="/assets/icons/dropdown.svg"
                  height={18}
                  width={18}
                  alt="language"
                  className="ml-1"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden relative">
        <div className="flex">
          {!showMenu ? (
            <div className="space-y-1.5 mt-10 mr-10" onClick={handleClick}>
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
              className="w-10 h-8 text-gray-600 animate-pulse mt-4 ml-4"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      <div className="hamburger-menu lg:hidden block relative bg-gray-100">
        {showMenu && (
          <ul className="px-10 py-6">
            {headerData?.map((itemHamburger, index) => {
              return (
                <li
                  key={index}
                  className="uppercase py-3 border-b border-gray-400 w-full flex justify-between"
                >
                  <Link href={itemHamburger.link} className="">
                    {itemHamburger.title}
                  </Link>
                  <Image
                    src="/assets/icons/down.svg"
                    width={15}
                    height={15}
                    alt="down"
                    className="text-end"
                    onClick={() => {
                      setCategory(!category);
                      console.log(category);
                    }}
                  />
                  {category && (
                    <ul className="">
                      {childMenu?.map((itemChildHamburger, index) => {
                        if (itemHamburger.title == itemChildHamburger.catName) {
                          return (
                            <li
                              key={index}
                              className="uppercase py-3 w-full block"
                            >
                              <Link href={itemChildHamburger.url}>
                                {itemChildHamburger.title}
                              </Link>
                              <ul>
                                {subChildMenu?.map(
                                  (itemSubchildHamburger, index) => {
                                    if (
                                      itemChildHamburger.title ==
                                      itemSubchildHamburger.catName
                                    ) {
                                      <li key={index}>
                                        <Link href={itemSubchildHamburger.url}>
                                          {itemSubchildHamburger.title}
                                        </Link>
                                      </li>;
                                    }
                                  }
                                )}
                              </ul>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
