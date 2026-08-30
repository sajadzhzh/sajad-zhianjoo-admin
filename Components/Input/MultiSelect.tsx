"use client";

import { useState } from "react";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
];

export default function MultiSelect({
  selected,
  setSelected,
}: {
  selected: string[];
  setSelected: (selected: any) => void;
}) {

  const toggleItem = (item: string) => {
    setSelected((prev: any) =>
      prev.includes(item)
        ? prev.filter((value: any) => value !== item)
        : [...prev, item],
    );
  };

  return (
    <div className="w-full md:col-span-2">
      <div className="flex flex-col gap-2">
        <label className="text-sm">مهارت‌ها</label>

        <div className="rounded-xl border border-(--border) bg-(--surface) p-2">
          <div className="flex flex-wrap gap-2">
            {technologies.map((item) => {
              const isSelected = selected.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleItem(item)}
                  className={`rounded-lg border px-3 py-1.5 text-sm transition ${
                    isSelected
                      ? "border-(--primary) bg-(--primary) text-white"
                      : "border-(--border) hover:border-(--primary)"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
