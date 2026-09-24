"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import { GetSocialMedia, UpdateSocialMedia } from "@/Actions/SiteSettings";
import toast from "react-hot-toast";

export default function LinksForm() {
  const [instagram, setInstagram] = useState("");
  const [telegram, setTelegram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    const request = async () => {
      const res = await GetSocialMedia();

      if (res.success) {
        setInstagram(res.data.instagram);
        setTelegram(res.data.telegram);
        setGithub(res.data.github);
        setLinkedin(res.data.linkedin);
      } else {
        setInstagram("");
        setTelegram("");
        setGithub("");
        setLinkedin("");
      }
    };
    request();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!instagram || !telegram || !github || !linkedin) {
      toast.error("تمام لینک ها الزامی هستند!");
    }

    try {
      const res = await UpdateSocialMedia({
        instagram,
        telegram,
        github,
        linkedin,
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
        <label htmlFor="instagram" className="text-[14px]">
          آدرس اینستاگرام
        </label>
        <TextInput
          name="instagram"
          id="instagram"
          defaultValue={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="telegram" className="text-[14px]">
          آدرس تلگرام
        </label>
        <TextInput
          name="telegram"
          id="telegram"
          defaultValue={telegram}
          onChange={(e) => setTelegram(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="github" className="text-[14px]">
          آدرس گیت هاب
        </label>
        <TextInput
          name="github"
          id="github"
          defaultValue={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="linkedin" className="text-[14px]">
          آدرس لینکدین
        </label>
        <TextInput
          name="linkedin"
          id="linkedin"
          defaultValue={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </div>

      <Button theme="primary" type="submit">
        ثبت
      </Button>
    </form>
  );
}
