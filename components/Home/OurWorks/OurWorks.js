import React from "react";
import syles from "./ourworks.module.css";
import Link from "next/link";
import Image from "next/image";

const OurWorks = () => {
  return (
    <div className="w-full pt-10">
      <div className="lg:grid grid-cols-4 w-full">
        <div className="col-span-2 bg-[#1A1A1A] text-white py-12 lg:px-16 px-8">
          <div className="h-1 w-24 bg-[#2e8fce] mb-3"></div>
          <h3 className="font-bold text-xl">Our Works</h3>
          <p className="lg:my-6 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            accusamus ab voluptatibus inventore, architecto illum quisquam
            cupiditate. Quaerat quod hic tempore officia error atque libero
            voluptates, quisquam maiores dolor dolorem?
          </p>
          <Link
            href="/"
            className="w-1/4 px-9 py-6 bg-white hover:bg-[#2e8fce] hover:text-white text-black text-sm font-semibold tracking-wider flex gap-2 items-center"
          >
            View All Software
          </Link>
        </div>
        <div className="col-span-1 bg-gray-200 border-r border-black">1</div>
        <div className="col-span-1 bg-gray-200">2</div>
      </div>

      <div className="lg:grid grid-cols-4 w-full h-80">
        <div className="col-span-1 bg-gray-200 border-r border-black">3</div>
        <div className="col-span-1 bg-gray-200 border-r border-black">4</div>
        <div className="col-span-1 bg-gray-200 border-r border-t border-black">
          5
        </div>
        <div className="col-span-1 bg-gray-200 border-t border-black">6</div>
      </div>
    </div>
  );
};

export default OurWorks;
