import React from "react";
import Link from "next/link";
import { headerData } from "@/collections/headerData";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-transparent hover:bg-white w-full z-50 lg:block hidden">
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
                  className="w-full hover:bg-[#f8f9fa] hover:border-b-2 hover:border-blue-500 transition-all duration-300 ease-in-out"
                >
                  <Link
                    href={item.link}
                    className="text-xs font-extrabold py-10 pl-6 pr-4 uppercase tracking-widest flex justify-center text-center items-center w-full"
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
