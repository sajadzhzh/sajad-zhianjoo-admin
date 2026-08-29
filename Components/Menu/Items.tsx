import {
  Award,
  Box,
  FileUser,
  Home,
  Mail,
  Settings,
  Settings2,
} from "lucide-react";
import Link from "next/link";

export default function MenuItems() {
  return (
    <>
      <Link href={""} className="menu-item active">
        <Home />
        صفحه اصلی
      </Link>
      <Link href={""} className="menu-item">
        <Box />
        پروژه‌ها
      </Link>
      <Link href={""} className="menu-item">
        <Award />
        مهارت‌ها
      </Link>
      <Link href={""} className="menu-item">
        <FileUser />
        رزومه
      </Link>
      <Link href={""} className="menu-item">
        <Mail />
        پیام‌ها
      </Link>
      <Link href={""} className="menu-item">
        <Settings2 />
        تنظیمات سایت
      </Link>
      <Link href={""} className="menu-item">
        <Settings />
        تنظیمات
      </Link>
    </>
  );
}
