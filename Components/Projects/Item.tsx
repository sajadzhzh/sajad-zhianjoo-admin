import post from "@/public/4.jpg";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem() {
  return (
    <Link
      href={"/projects/1"}
      className="w-full relative border border-(--border) rounded-xl"
    >
      <Image
        src={post}
        width={500}
        height={500}
        alt="post_image"
        className="rounded-xl w-full"
      />

      <div className="w-full h-full absolute top-0 right-0 py-4 px-5 bg-black/40 rounded-xl hover:bg-black/75 group">
        <h3 className="font-bold text-[18px]">نام پروژه</h3>
        <p className="text-[14px] text-(--muted) lg:opacity-0 group-hover:opacity-100">دسته‌بندی پروژه</p>
      </div>
    </Link>
  );
}
