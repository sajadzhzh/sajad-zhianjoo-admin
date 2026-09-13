import ProjectItem from "@/Components/Projects/Item";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[16px]">پروژه‌ها</h2>
        <Link
          href={"/projects/new"}
          className="py-1 px-4 text-[16px] bg-(--primary) rounded-lg hover:shadow-[0_2px_8px_var(--primary)]"
        >
          پروژه جدید
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
