import Image from "next/image";
import Link from "next/link";

type ProjectType = {
  id: number;
  name: string;
  sort: string;
  thumbnail: string;
}

export default function ProjectItem({data}:{data: ProjectType}) {
  return (
    <Link
      href={`/projects/${data.id}`}
      className="w-full relative border border-(--border) rounded-xl"
    >
      <Image
        src={data.thumbnail}
        width={500}
        height={500}
        alt="post_image"
        className="rounded-xl w-full"
      />

      <div className="w-full h-full absolute top-0 right-0 py-4 px-5 bg-black/40 rounded-xl hover:bg-black/75 group">
        <h3 className="font-bold text-[18px]">{data.name}</h3>
        <p className="text-[14px] text-(--muted) lg:opacity-0 group-hover:opacity-100">{data.sort}</p>
      </div>
    </Link>
  );
}
