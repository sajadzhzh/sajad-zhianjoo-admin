import Link from "next/link";

type AbilityType = {
  id: number;
  name: string;
  sort: string;
};

export default function AbilityItem({data}:{data : AbilityType}) {
  return (
    <Link
      href={`/abilities/${data.id}`}
      className="w-full flex items-center justify-between px-4 py-3 bg-(--surface) border border-(--border) rounded-xl hover:bg-(--surface-hover)"
    >
      <h3 className="text-[14px]">{data.name}</h3>
      <p className="text-[12px] text-(--muted)">{data.sort}</p>
    </Link>
  );
}
