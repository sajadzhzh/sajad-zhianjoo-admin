import Link from "next/link";

export default function DMItem() {
  return (
    <Link href={""} className="w-full flex justify-between gap-2 items-center px-2 py-1 rounded border border-(--border) hover:bg-(--surface-hover)">
      <div>
        <p className="text-[14px]">نام و نام خانوادگی فرستنده</p>
        <p className="text-[12px] text-(--muted)">موضوع پیام</p>
      </div>
      <p className="text-[12px] text-(--muted)">زمان ارسال</p>
    </Link>
  );
}
