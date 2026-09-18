"use client";

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import toast from "react-hot-toast";
import { NewUser } from "@/Actions/Auth";

export default function NewUserForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelSubmit = async (e: any) => {
    e.preventDefault();

    if (!userName || !password || !confirmPassword) {
      toast.error("تمام مقادیر الزامی هستند!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("مقادیر رمز عبور یکی نیست!");
      return;
    }

    const res = await NewUser({ userName, password, confirmPassword });

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
      onSubmit={(e) => handelSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="userName" className="text-[14px]">
          نام کاربری
        </label>
        <TextInput
          name="userName"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[14px]">
          رمزعبور
        </label>
        <TextInput
          name="password"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="passwordConfirm" className="text-[14px]">
          تکرار رمز عبور
        </label>
        <TextInput
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Button
        theme="primary"
        className="md:col-span-2 md:max-w-1/2"
        type="submit"
      >
        ایجاد کاربر
      </Button>
    </form>
  );
}
