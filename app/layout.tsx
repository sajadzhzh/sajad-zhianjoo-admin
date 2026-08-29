import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Index";
import Menu from "@/Components/Menu/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "پنل مدیریت",
  description: "پنل مدیریت سجاد ژیانجو",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${vazirmatn.variable}`}
    >
      <body className="min-h-svh flex">
        <div className="hidden lg:block lg:w-1/5">
          <Menu />
        </div>

        <div className="w-full lg:w-4/5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
