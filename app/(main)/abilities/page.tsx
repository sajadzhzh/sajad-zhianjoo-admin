"use client";

import { GetAllAbilities } from "@/Actions/Abilities";
import AbilityItem from "@/Components/Abilities/Item";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Empty from "@/Components/Empty";

export default function AbilitiesPage() {
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const res = await GetAllAbilities();

      if (res.success) {
        setAbilities(res.data);
        setLoading(false);
      } else {
        setAbilities([]);
        setLoading(false);
      }
    };

    request();
  }, []);
  
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
        {abilities.length > 0 &&
          abilities.map((i, index) => <AbilityItem key={index} data={i} />)}

        {loading && <Loading />}

        {abilities.length <= 0 && !loading && Empty("مهارتی ثبت نشده است!")}
      </div>
    </div>
  );
}
