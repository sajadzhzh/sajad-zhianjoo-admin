import Link from "next/link";
import "./Header.css";
import { LogOut, Mail, Settings } from "lucide-react";

export default function Desktop() {
  return (
    <header className="hidden lg:flex header">
      <h2 className="font-bold text-[18px] ">پنل مدیریت</h2>
      <div className="flex items-center gap-4">
        <Link
          href={""}
          className="px-4 py-2 rounded hover:bg-(--surface) text-[14px]"
        >
          <Settings size={22} />
        </Link>
        <Link
          href={""}
          className="px-4 py-2 rounded hover:bg-(--surface) text-[14px]"
        >
          <Mail size={22} />
        </Link>
        <Link
          href={""}
          className="px-4 py-2 rounded bg-red-600/15 hover:bg-red-600/40 text-red-700 flex gap-1 items-center text-[14px]"
        >
          <LogOut size={22} />
          خروج از حساب
        </Link>
      </div>
    </header>
  );
}
