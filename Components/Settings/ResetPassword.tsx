"use client";

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import toast from "react-hot-toast";
import { ChangePassword } from "@/Actions/Auth";

export default function ResetPasswordForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      toast.error("تمام مقادیر الزامی هستند!");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      toast.error("مقادیر رمز عبور جدید یکی نیست!");
      return;
    }

    const res = await ChangePassword({
      oldPassword,
      newPassword,
      confirmNewPassword,
    });

    switch (res?.success) {
      case false:
        res.message && toast.error(res.message);
        break;
      case true:
        res.message && toast.success(res.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        break;
    }
  };
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="oldPassword" className="text-[14px]">
          رمز عبور فعلی
        </label>
        <TextInput
          name="oldPassword"
          id="oldPassword"
          type="password"
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="newPassword" className="text-[14px]">
          رمزعبور جدید
        </label>
        <TextInput
          name="newPassword"
          id="newPassword"
          type="password"
          onChange={(e) => setnewPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmNewPassword" className="text-[14px]">
          تکرار رمز عبور جدید
        </label>
        <TextInput
          name="confirmNewPassword"
          id="confirmNewPassword"
          type="password"
          onChange={(e) => setconfirmNewPassword(e.target.value)}
        />
      </div>

      <Button
        theme="primary"
        className="md:col-span-2 md:max-w-1/2"
        type="submit"
      >
        تغییر رمز عبور
      </Button>
    </form>
  );
}
