'use client';
import React, { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import {Links} from "../data/types"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="md:hidden" onClick={toggleNav}>
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-start p-5 gap-4 text-[14px] leading-[110%] ">
          {Links.map((link, index) => (
            <li key={index} className="hover:text-[#007580]">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
