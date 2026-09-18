import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import "./login.css";
import { Toaster } from "react-hot-toast";

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
      <body className="min-h-svh">
        <Toaster
          position="top-right"
          toastOptions={{ style: { background: "#18181b", color: "#fafafa", border: "1px solid #27272a" } }}
        />
        {children}
      </body>
    </html>
  );
}
