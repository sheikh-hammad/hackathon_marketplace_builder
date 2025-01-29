import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import localFont from "next/font/local";
import { Inter, Roboto, Open_Sans, Poppins } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-openSans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const helvetica = localFont({
  src: "/fonts/Helvetica.ttf",
  variable: "--font-helvetica",
  display: "swap",
  weight: "100 900",
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${helvetica.variable} ${poppins.variable} ${roboto.variable} ${inter.className} antialiased`}>
      <body
        
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
