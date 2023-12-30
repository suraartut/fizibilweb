import React, { useState } from "react";
import Link from "next/link";
import { childMenu, headerData, subChildMenu } from "@/collections/headerData";
import Image from "next/image";
import styles from "./layout.module.css";

const MobileHeader = ({ showMenu }) => {
  const [CatId, setCatId] = useState();
  const [CatChildId, setCatChildId] = useState();

  const handleClick2 = (index) => {
    setCatId(index);
  };

  const handleClick3 = (index) => {
    setCatChildId(index);
  };

  return (
    <nav className={styles.mobile_nav}>
      <div className="hamburger-menu fixed top-[88px] w-full bg-[#f8f9fa] shadow-xl">
        {showMenu && (
          <>
            <ul className="px-6 py-6">
              {headerData?.map((itemHamburger, index) => {
                return (
                  <li
                    key={index}
                    className="py-3 border-b border-gray-400 w-full"
                  >
                    <div className="flex justify-between">
                      <Link href={itemHamburger.link} className="uppercase">
                        {itemHamburger.title}
                      </Link>
                      {itemHamburger.catChild > 0 && (
                        <Image
                          src={
                            CatId == itemHamburger.id
                              ? "/assets/icons/up.svg"
                              : "/assets/icons/down.svg"
                          }
                          width={25}
                          height={25}
                          alt="down"
                          className="text-end"
                          onClick={() => handleClick2(itemHamburger.id)}
                        />
                      )}
                    </div>

                    <ul>
                      {childMenu?.map((itemChildHamburger) => {
                        if (
                          CatId == itemHamburger.id &&
                          itemHamburger.title == itemChildHamburger.catName
                        ) {
                          return (
                            <li
                              key={itemChildHamburger.id}
                              className={styles.child_hamburger}
                            >
                              <div className="flex justify-between">
                                <Link href={itemChildHamburger.url}>
                                  {itemChildHamburger.title}
                                </Link>
                                {itemChildHamburger.catChild > 0 && (
                                  <Image
                                    src={
                                      CatChildId == itemChildHamburger.id
                                        ? "/assets/icons/up.svg"
                                        : "/assets/icons/down.svg"
                                    }
                                    width={20}
                                    height={20}
                                    alt="down"
                                    className="text-end"
                                    onClick={() =>
                                      handleClick3(itemChildHamburger.id)
                                    }
                                  />
                                )}
                              </div>

                              <ul>
                                {subChildMenu?.map((itemSubchildHamburger) => {
                                  if (
                                    CatChildId == itemChildHamburger.id &&
                                    itemChildHamburger.title ==
                                      itemSubchildHamburger.catName
                                  ) {
                                    return (
                                      <li
                                        key={itemSubchildHamburger.id}
                                        className={styles.sub_menu}
                                      >
                                        <Link href={itemSubchildHamburger.url}>
                                          {itemSubchildHamburger.title}
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
            <div className="w-full gap-5 px-6 py-6">
              {/* Account */}
              {/* <div className={styles.mobile_account}>
                <Image
                  src="/assets/icons/account.svg"
                  height={25}
                  width={25}
                  alt="account"
                />
                <span className="pl-1 capitalize text-lg">Giriş</span>
              </div> */}

              {/* Language */}
              <div className={styles.mobile_language}>
                <span className="text-lg">Tr</span>
                <Image
                  src="/assets/icons/dropdown.svg"
                  height={25}
                  width={25}
                  alt="language"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default MobileHeader;
