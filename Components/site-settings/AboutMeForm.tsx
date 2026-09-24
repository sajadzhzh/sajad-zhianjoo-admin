"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import { GetAboutMe, UpdateAboutMe } from "@/Actions/SiteSettings";
import toast from "react-hot-toast";

export default function AboutMeForm() {
  const [header, setHeader] = useState("");
  const [header_bold, setHeader_bold] = useState("");
  const [about_me, setAbout_me] = useState("");

  useEffect(() => {
    const request = async () => {
      const res = await GetAboutMe();

      if (res.success) {
        setHeader(res.data.header);
        setHeader_bold(res.data.header_bold);
        setAbout_me(res.data.about_me);
      } else {
        setHeader("");
        setHeader_bold("");
        setAbout_me("");
      }
    };
    request();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!header || !header_bold || !about_me) {
      toast.error("تمام لینک ها الزامی هستند!");
    }

    try {
      const res = await UpdateAboutMe({
        header,
        header_bold,
        about_me,
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
        <label htmlFor="heading" className="text-[14px]">
          هدر
        </label>
        <TextInput
          name="heading"
          id="heading"
          defaultValue={header}
          onChange={(e) => setHeader(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="headingBold" className="text-[14px]">
          هدر رنگی
        </label>
        <TextInput
          name="headingBold"
          id="headingBold"
          defaultValue={header_bold}
          onChange={(e) => setHeader_bold(e.target.value)}
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label htmlFor="aboutMe" className="text-[14px]">
          درباره من
        </label>
        <textarea
          rows={5}
          name="aboutMe"
          id="aboutMe"
          defaultValue={about_me}
          onChange={(e) => setAbout_me(e.target.value)}
          className="px-3 py-1 border border-(--border) outline-0 bg-(--surface) rounded-lg focus:bg-(--surface-hover)"
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
