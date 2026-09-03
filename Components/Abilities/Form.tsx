"use client";

import { useEffect, useState } from "react";
import SelectBox from "../Input/SelectBox";
import TextInput from "../Input/Text";
import Button from "../Button/Button";

export default function AbilityForm({
  edit,
  id,
}: {
  edit?: boolean;
  id?: string;
}) {
  const [sort, setSort] = useState("");
  useEffect(() => {
    edit && setSort("front");
  }, []);

  return (
    <form className="space-y-2 w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-[14px]">
          عنوان مهارت
        </label>
        <TextInput name="name" id="name" defaultValue={edit ? "Next.js" : ""} />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label className="text-[14px]">دسته بندی</label>
        <SelectBox
          value={sort}
          setValue={setSort}
          options={[
            { label: "front", value: "front" },
            { label: "back", value: "back" },
            { label: "total", value: "total" },
          ]}
        />
      </div>

      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <Button theme="primary">
          {edit ? "اعمال تغییرات" : "ایجاد مهارت"}
        </Button>

        {edit && (
          <Button
            theme="normal"
            className="border border-red-600 bg-red-500/50 hover:bg-red-500/75"
          >
            حذف مهارت
          </Button>
        )}
      </div>
    </form>
  );
}
