"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links } from "../data/types";
import { User, Heart} from "lucide-react";
import SearchBar from "./SearchBar";

const BottomNav = () => {
  const currentPath = usePathname();

  return (
    <div className="flex items-center justify-between w-full py-4">
      <ul className="flex gap-5 lg:gap-8 text-[14px] font-inter leading-[110%]">
        {Links.map((link, index) => {
          const isActive = currentPath === link.path;
          return (
            <li key={index} className="hover:text-[#007580] text-[#333] ">
              <Link
                className={isActive ? "text-[#007580] font-medium" : ""}
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex ">
        <Link href="/contact" className="flex gap-2 items-center">
          <User className="text-[14px] text-[#333] size-4" />
          <p className="text-[14px] text-[#333] ">Login / Register</p>
        <SearchBar/>
        <Heart className="size-5 text-[#6b7280]" />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
