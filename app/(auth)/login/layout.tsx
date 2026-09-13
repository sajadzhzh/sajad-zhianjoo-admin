import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import "./login.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "ورود به پنل مدیریت",
  description: "ورود به پنل",
};

export default function LoginLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${vazirmatn.variable}`}
    >
      <body className="min-h-svh">{children}</body>
    </html>
  );
}
