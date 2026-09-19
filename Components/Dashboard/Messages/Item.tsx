import { toJalaliDate } from "@/Helper/Date";

type MessageType ={
  name: string;
  title: string;
  time: string;
}

export default function DMItem({name, title, time}: MessageType) {
  
  return (
    <div className="w-full flex justify-between gap-2 items-center px-2 py-1 rounded border border-(--border) hover:bg-(--surface-hover)">
      <div>
        <p className="text-[14px]">{name}</p>
        <p className="text-[12px] text-(--muted)">{title}</p>
      </div>
      <p className="text-[12px] text-(--muted)">{toJalaliDate(time)}</p>
    </div>
  );
}
