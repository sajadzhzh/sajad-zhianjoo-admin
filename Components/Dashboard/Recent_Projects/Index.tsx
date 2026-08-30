import ProjectItem from "@/Components/Projects/Item";
import Link from "next/link";

export default function RecentProjects() {
  return (
    <div className="w-full Container bg-(--surface) border border-(--border) rounded-xl">
      <div className="w-full flex gap-2 items-center justify-between mb-4">
        <h2 className="text-[14px]">پروژه‌های اخیر</h2>
        <Link
          href={"/projects"}
          className="py-1 px-4 text-[12px] bg-(--primary) rounded-lg"
        >
          مشاهده همه
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
