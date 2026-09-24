"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import { GetAddress, UpdateAddress } from "@/Actions/SiteSettings";
import toast from "react-hot-toast";

export default function AddressForm() {
  const [address, setAddress] = useState("");
  const [gmail, setGmail] = useState("");

  useEffect(() => {
    const request = async () => {
      const res = await GetAddress();

      if (res.success) {
        setAddress(res.data.address);
        setGmail(res.data.email);
      } else {
        setAddress("");
        setGmail("");
      }
    };
    request();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!address || !gmail) {
      toast.error("تمام آدرس ها الزامی هستند!");
    }

    try {
      const res = await UpdateAddress({
        address,
        gmail,
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
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="text-[14px]">
          آدرس
        </label>
        <TextInput
          name="address"
          id="address"
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="gmail" className="text-[14px]">
          آدرس ایمیل
        </label>
        <TextInput
          name="gmail"
          id="gmail"
          defaultValue={gmail}
          onChange={(e) => setGmail(e.target.value)}
        />
      </div>

      <Button
        theme="primary"
        type="submit"
        className="md:col-span-2 md:max-w-1/2"
      >
        ثبت
      </Button>
    </form>
  );
}
