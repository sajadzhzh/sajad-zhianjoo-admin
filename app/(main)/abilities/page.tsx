import AbilityItem from "@/Components/Abilities/Item";
import Link from "next/link";

export default function AbilitiesPage() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-[16px]">مهارت‌ها</h2>
        <Link
          href={"/abilities/new"}
          className="py-1 px-4 text-[16px] bg-(--primary) rounded-lg hover:shadow-[0_2px_8px_var(--primary)]"
        >
          مهارت جدید
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <AbilityItem />
        <AbilityItem />
        <AbilityItem />
        <AbilityItem />
      </div>
    </div>
  );
}
