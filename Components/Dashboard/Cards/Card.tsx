import { LucideIcon } from "lucide-react";

export default function Card({
  title,
  amount,
  Icon,
}: {
  title: string;
  amount: number;
  Icon: LucideIcon;
}) {
  return (
    <div className="bg-(--surface) border border-(--border) rounded-xl px-6 py-5 flex items-center justify-between">
      <div>
        <p className="text-(--muted) text-[14px]">{title}</p>
        <p className="text-[20px]">{amount}</p>
      </div>

      <div className="bg-[#7c3aed5e] text-(--primary) p-2 rounded-xl">
        <Icon size={28}/>
      </div>
    </div>
  );
}
