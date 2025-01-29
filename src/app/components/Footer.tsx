import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className=" px-8 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] flex sm:flex-row flex-col flex-wrap justify-between 2xl:gap-12 gap-8 lg:gap-8 xl:gap-10 3xl:gap-8 py-8 sm:pt-20 sm:pb-[65px]">
        <div className="flex flex-col gap-6 max-w-xs flex-1">
          <div className="flex items-center gap-2">
            <Image
              alt="logo"
              src="/asset/logo.png"
              className="w-10 h-10"
              width={40}
              height={40}
            />
            <p className="font-semibold text-[23px] lg:text-[26px] leading-[120%] text-[#272343]">
              Comforty
            </p>
          </div>
          <p className="text-[13px] lg:text-[16px] leading-6 text-[#272343]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <FaFacebook />, link: "/" },
              { icon: <FaTwitter />, link: "/" },
              { icon: <FaInstagram />, link: "/" },
              { icon: <FaPinterest />, link: "/" },
              { icon: <FaYoutube />, link: "/" },
            ].map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:border-[#007580] hover:text-[#007580] transition"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Category */}
        <div className="flex flex-col gap-5 min-w-[150px] flex-1 md:flex-none">
          <p className="font-medium text-[11px] lg:text-[14px] uppercase tracking-wider text-[#9A9CAA]">
            Category
          </p>
          <ul className="flex flex-col gap-3 text-[#272343]">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="text-[13px] lg:text-[16px] hover:underline hover:text-[#007580] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="flex flex-col gap-5 min-w-[150px] flex-1 md:flex-none">
          <p className="font-medium text-[11px] lg:text-[14px] uppercase tracking-wider text-[#9A9CAA]">
            Support
          </p>
          <ul className="flex flex-col gap-3 text-[#272343]">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="/"
                  className="lg:text-[16px] text-[13px] hover:underline hover:text-[#007580] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-4 max-w-sm flex-1">
          <p className="font-medium text-[11px] lg:text-[14px] uppercase tracking-wider text-[#9A9CAA]">
            Newsletter
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              placeholder="Your email"
              type="email"
              className="flex-1 h-[46px] py-[15px] px-4 rounded-lg border border-gray-300 text-[16px] outline-none  "
            />
            <button className="flex-shrink-0 h-[46px] px-5 bg-[#029FAE] text-white font-semibold rounded-lg hover:bg-[#007580] transition">
              Subscribe
            </button>
          </div>
          <p className="text-[12px] lg:text-[15px] leading-[150%] text-[#272343]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
      <hr />
      <div className="px-8 sm:px-[25px] md:px-[120px]   2xl:px-60 3xl:px-[300px] xl:px-[150px] lg:px-[100px] lg:justify-between justify-center flex py-[27px] ">
        <p className="text-[14px] font-poppins leading-[auto] text-[#9A9CAA] text-center">
          @ 2021 - Blogy - Designed & Develop by{" "}
          <span className="text-[#272343]">Zakirsoft</span>{" "}
        </p>
        <div className="lg:flex gap-[10px] hidden">
          <Image alt="" src="/asset/Group 11.png" width={36} height={22.25} />
          <Image alt="" src="/asset/Group 12.png" width={56} height={14.92} />
          <Image alt="" src="/asset/Vector (12).png" width={50} height={27} />
          <Image alt="" src="/asset/Union.png" width={55} height={17.84} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
