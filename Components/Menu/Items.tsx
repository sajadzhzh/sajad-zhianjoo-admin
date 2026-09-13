"use client"

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
import { usePathname } from "next/navigation";

export default function MenuItems() {
  const path = usePathname()
  return (
    <>
      <Link href={"/"} className={path === "/" ? "menu-item active" : "menu-item"}>
        <Home />
        صفحه اصلی
      </Link>
      <Link href={"/projects"} className={path.includes("/projects") ? "menu-item active" : "menu-item"}>
        <Box />
        پروژه‌ها
      </Link>
      <Link href={"/abilities"} className={path.includes("/abilities") ? "menu-item active" : "menu-item"}>
        <Award />
        مهارت‌ها
      </Link>
      <Link href={"/resume"} className={path.includes("/resume") ? "menu-item active" : "menu-item"}>
        <FileUser />
        رزومه
      </Link>
      <Link href={"/messages"} className={path.includes("/messages") ? "menu-item active" : "menu-item"}>
        <Mail />
        پیام‌ها
      </Link>
      <Link href={"/site-settings"} className={path.includes("/site-settings") ? "menu-item active" : "menu-item"}>
        <Settings2 />
        تنظیمات سایت
      </Link>
      <Link href={"/settings"} className={path.includes("/settings") ? "menu-item active" : "menu-item"}>
        <Settings />
        تنظیمات
      </Link>
    </>
  );
}
