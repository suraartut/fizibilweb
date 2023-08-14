import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent hover:bg-red-500 h-20 w-full">
      <div className="px-10 flex h-full items-center justify-between text-center">
        <div>Logo</div>
        <div>
          <ul className="w-full flex gap-5">
            <li>Home</li>
            <li>Software</li>
            <li>Industry</li>
            <li>Support</li>
            <li>Company</li>
            <li>News</li>
            <li>Download</li>
          </ul>
        </div>
        <div>
          <ul className="w-full flex gap-5">
            <li>My Account</li>
            <li>Language</li>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
