"use client";

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import toast from "react-hot-toast";
import { Login } from "@/Actions/Auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(!userName || !password){
      toast.error("تمام مقادیر الزامی هستند!")
      return
    }

    const res = await Login({userName, password})

    switch (res?.success) {
      case false:
        res.message && toast.error(res.message);
        break;
      case true:
        res.message && toast.success(res.message);
        setTimeout(() => {
          router.push("/")
        }, 2000);
        break;
    }
  };
  return (
    <form
      className="w-full mx-4  md:max-w-1/2 lg:max-w-1/3 bg-(--surface) py-8 px-5 rounded-lg border border-(--border) flex flex-col gap-2 items-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <h1 className="flex items-center justify-center gap-1 text-[20px] font-bold">
          سجاد ژیانجو
          <span className="rounded-full border-2 border-(--primary)"></span>
        </h1>
        <p className="text-[12px] text-(--muted)">
          لطفا نام کاربری و رمز عبور خود را وارد کنید.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="userName" className="text-[14px]">
          نام کاربری
        </label>
        <TextInput
          name="userName"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password" className="text-[14px]">
          رمز عبور
        </label>
        <TextInput
          name="password"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button theme="primary" type="submit">
        ورود
      </Button>
    </form>
  );
}
