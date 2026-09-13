"use client";

import { useState } from "react";
import Button from "../Button/Button";
import SelectBox from "../Input/SelectBox";

export default function Readyform() {
  const [value, setValue] = useState("");
  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="text-[14px]">
          آماده برای قبول پروژه جدید
        </label>
        <SelectBox
          value={value}
          setValue={setValue}
          options={[
            { label: "هستم", value: "ready" },
            { label: "نیستم", value: "notReady" },
          ]}
        />
      </div>

      <Button theme="primary" className="col-span-2 md:max-w-1/2">
        ثبت
      </Button>
    </form>
  );
}
