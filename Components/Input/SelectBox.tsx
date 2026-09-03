"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectBoxProps = {
  value: string;
  setValue: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
};

export default function SelectBox({
  value,
  setValue,
  options,
  placeholder = "انتخاب کنید",
  disabled = false,
}: SelectBoxProps) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: SelectOption) => {
    setValue(option.value);
    setOpen(false);
  };

  return (
    <div ref={selectRef} dir="rtl" className="relative w-full">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={`
          w-full h-9 px-4
          flex items-center justify-between
          rounded-xl
          border border-(--border)
          bg-(--surface)
          text-sm
          transition-all duration-200
          outline-none
          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:border-(--primary)"
          }
          ${open ? "border-(--primary) ring-2 ring-(--primary)/10" : ""}
        `}
      >
        <span
          className={
            selectedOption ? "text-(--font-color)" : "text-(--font-color)/40"
          }
        >
          {selectedOption?.label || placeholder}
        </span>

        <ChevronDown
          size={18}
          className={`
            text-(--font-color)/50
            transition-transform duration-200
            ${open ? "rotate-180 text-(--primary)" : ""}
          `}
        />
      </button>

      <div
        className={`
          absolute z-50
          top-[calc(100%+6px)]
          right-0
          w-full
          overflow-hidden
          rounded-xl
          border border-(--border)
          bg-(--surface)
          shadow-xl
          origin-top
          transition-all duration-200
          ${
            open
              ? "visible scale-y-100 opacity-100"
              : "invisible scale-y-95 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="p-1.5">
          {options.length > 0 ? (
            options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`
                    w-full
                    min-h-10
                    px-3
                    rounded-lg
                    flex items-center justify-between
                    text-sm
                    text-right
                    transition-colors duration-150
                    ${
                      isSelected
                        ? "bg-(--primary)/10 text-(--primary)"
                        : "text-(--font-color)/80 hover:bg-(--background) hover:text-(--font-color)"
                    }
                  `}
                >
                  <span>{option.label}</span>

                  {isSelected && (
                    <Check size={17} className="text-(--primary)" />
                  )}
                </button>
              );
            })
          ) : (
            <div className="px-3 py-4 text-center text-sm text-(--font-color)/40">
              گزینه‌ای وجود ندارد
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
