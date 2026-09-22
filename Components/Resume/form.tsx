"use client";

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import SelectBox from "../Input/SelectBox";
import toast from "react-hot-toast";
import { NewResume } from "@/Actions/Resume";
import { useRouter } from "next/navigation";

type ResumeType = {
  link: string;
  is_active: boolean;
};

export default function ResumeForm({
  edit,
  data,
}: {
  edit?: boolean;
  data?: ResumeType;
}) {
  const [active, setActive] = useState(false);
  const [link, setLink] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!link) {
      toast.error("لینک رزومه اجباری است!");
    }

    try {
      const res = await NewResume({ link, is_active: active });

      if (res.success) {
        res.message && toast.success(res.message);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        res.message && toast.error(res.message);
      }
    } catch {
      toast.error("مشکلی در دریافت اطلاعات پیش آمد!");
    }
  };

  return (
    <form
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="resumeLink" className="text-[14px]">
          لینک رزومه
        </label>
        <TextInput
          name="resumeLink"
          id="resumeLink"
          defaultValue={edit ? data?.link : ""}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="resumeLink" className="text-[14px]">
          قابل نمایش
        </label>
        <SelectBox
          value={active}
          setValue={setActive}
          options={[
            { label: "هست", value: true },
            { label: "نیست", value: false },
          ]}
        />
      </div>
      <Button theme="primary" className="md:max-w-1/4" type="submit">
        {edit ? "اعمال تغییر" : "ثبت"}
      </Button>
    </form>
  );
}
