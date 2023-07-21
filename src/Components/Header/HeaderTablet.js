import React from "react";
import UserNav from "./UserNav";

export default function HeaderDesktop() {
  return (
    <header className="p-1 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <span className="text-2xl font-bold text-green-500"> MyFlix</span>

        <UserNav />
      </div>
    </header>
  );
}
