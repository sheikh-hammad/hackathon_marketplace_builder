"use client";
import React from "react";
import Link from "next/link";
import { Links } from "../data/types";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const currentPath = usePathname();

  return (
    <>
      <div className="hidden md:inline">
        <ul className="flex gap-5 lg:gap-8 text-[14px] font-inter leading-[110%] ">
          {Links.map((link, index) => {
            const isActive = currentPath === link.path;
            return (
              <li key={index} className="hover:text-[#007580]">
                <Link
                  className={isActive ? "text-[#007580]" : ""}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BottomNav;
