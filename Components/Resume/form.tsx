"use client";

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../Input/Text";
import SelectBox from "../Input/SelectBox";

export default function ResumeForm({
  edit,
  link,
}: {
  edit?: boolean;
  link?: string;
}) {
  const [active, setActive] = useState("");
  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="resumeLink" className="text-[14px]">
          لینک رزومه
        </label>
        <TextInput
          name="resumeLink"
          id="resumeLink"
          defaultValue={edit ? link : ""}
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
            { label: "هست", value: "true" },
            { label: "نیست", value: "false" },
          ]}
        />
      </div>
      <Button theme="primary" className="md:max-w-1/4">
        {edit ? "اعمال تغییر" : "ثبت"}
      </Button>
    </form>
  );
}
