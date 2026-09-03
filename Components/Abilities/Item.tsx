import Link from "next/link";

export default function AbilityItem() {
  return (
    <Link
      href={"/abilities/1"}
      className="w-full flex items-center justify-between px-4 py-3 bg-(--surface) border border-(--border) rounded-xl hover:bg-(--surface-hover)"
    >
      <h3 className="text-[14px]">نام مهارت</h3>
      <p className="text-[12px] text-(--muted)">دسته بندی</p>
    </Link>
  );
}
