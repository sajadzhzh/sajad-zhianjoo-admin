"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import SelectBox from "../Input/SelectBox";
import { GetAvailable, UpdateAvailable } from "@/Actions/SiteSettings";
import toast from "react-hot-toast";

export default function Readyform() {
  const [is_available, setIs_available] = useState(false);

  useEffect(() => {
    const request = async () => {
      const res = await GetAvailable();

      if (res.success) {
        setIs_available(res.data.is_available);
      } else {
        setIs_available(false);
      }
    };
    request();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await UpdateAvailable({
        is_available,
      });

      if (res.success) {
        res.message && toast.success(res.message);
      } else {
        res.message && toast.error(res.message);
      }
    } catch {
      toast.error("مشکلی در ارسال و دریافت مشکلات پیش آمد.");
    }
  };
  return (
    <form
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="text-[14px]">
          آماده برای قبول پروژه جدید
        </label>
        <SelectBox
          value={is_available}
          setValue={setIs_available}
          options={[
            { label: "هستم", value: true },
            { label: "نیستم", value: false },
          ]}
        />
      </div>

      <Button theme="primary" type="submit" className="col-span-2 md:max-w-1/2">
        ثبت
      </Button>
    </form>
  );
}
