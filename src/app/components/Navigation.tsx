'use client'
import TopNav from "./ui/TopNav";
import MiddleNav from "./ui/MiddleNav";
import BottomNav from "./ui/BottomNav";
import MobileNav from "./ui/MobileNav";
import Link from "next/link"

const Navigation = () => {
  return (
    <>
      <TopNav/>
      <MiddleNav/>
      <div className="px-4 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] h-[42px] md:h-[74px] flex justify-between items-center ">
        <BottomNav />
        <MobileNav />
        <Link href="/contact" className="flex gap-2">
          <p className="text-[14px] text-[#636270]">Contact:</p>
          <p className="text-[#272343] font-medium text-[14px]">
            (808) 555-0111
          </p>
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Navigation;
