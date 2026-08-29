"use client";

import { useEffect, useRef } from "react";
import MenuItems from "../Items";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function HiddenMenuContent({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (Ref.current && !Ref.current.contains(event.target as Node)) {
        setOpen(false);
      }

      if (Ref.current?.contains(event.target as Node)) {
        setTimeout(() => {
          setOpen(false);
        }, 250);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <div
        className={
          open
            ? "absolute show right-0 top-0 w-full h-svh bg-gray-600/50 z-999"
            : "absolute right-0 top-0 w-full h-svh bg-gray-600/50 z-999 hidden hide"
        }
      >
        <div
          className={`w-3/4 menu ${open ? "translate-x-0 slideLeft" : "translate-x-full slideRight"}`}
          ref={Ref}
        >
          <h1 className="flex items-center justify-center gap-1 text-[24px] font-bold">
            سجاد ژیانجو
            <span className="rounded-full border-2 border-(--primary)"></span>
          </h1>

          <div className="flex flex-col gap-5">
            <MenuItems />
          </div>

          <Link
          href={""}
          className="px-4 py-2 mt-auto rounded bg-red-600/15 hover:bg-red-600/40 text-red-700 flex gap-1 items-center text-[14px]"
        >
          <LogOut size={22} />
          خروج از حساب
        </Link>
        </div>
      </div>
    </>
  );
}
