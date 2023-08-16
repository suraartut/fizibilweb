import React from "react";
import Link from "next/link";
import { childMenu, headerData, subChildMenu } from "@/collections/headerData";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-transparent hover:bg-white w-full z-50 lg:block hidden h-24">
      <div className="px-10 flex h-full items-center justify-between text-center">
        <div>
          <Image
            src="/assets/Images/fizibil-logo.png"
            width={200}
            height={100}
            alt="Şirket Logosu"
          />
        </div>
        <div>
          <ul className="w-full flex gap-10">
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
    </header>
  );
};

export default Header;
