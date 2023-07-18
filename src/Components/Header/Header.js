import React from "react";
import UserNav from "./UserNav";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-1 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <span className="text-2xl font-bold text-green-500"> MyFlix</span>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to={"/"}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to={"/contact"}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to={"/news"}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <UserNav />
      </div>
    </header>
  );
}
