import React from "react";
import UserNav from "./UserNav";

export default function HeaderDesktop() {
  return (
    <header className="p-1 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <div className="flex flex-col justify-center items-center">
          <img src="./logoHeader1.png" className="w-16  p-1" alt="" />
        </div>

        <UserNav />
      </div>
    </header>
  );
}
