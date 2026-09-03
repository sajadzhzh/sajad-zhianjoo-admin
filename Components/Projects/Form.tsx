"use client";

import { useEffect, useState } from "react";
import MultiSelect from "../Input/MultiSelect";
import TextInput from "../Input/Text";
import Button from "../Button/Button";
import MainImageInput from "../Input/MainImageInput";
import GalleryImageInput from "../Input/GalleryInput";
import post from "@/public/4.jpg";

type MainImage = {
  file: File | null;
  preview: string | null;
};

export type GalleryImage = {
  file: File | null;
  preview: string | null;
};

export default function ProjectForm({
  edit,
  id,
}: {
  edit?: boolean;
  id?: string;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<MainImage>({
    file: null,
    preview: edit ? post.src : null,
  });
  const [images, setImages] = useState<GalleryImage[]>([
    {
      file: null,
      preview: edit ? post.src : null,
    },
  ]);

  useEffect(() => {
    edit && setSelected(["Next.js", "Tailwind CSS"]);
  }, []);
  return (
    <form className="space-y-2 w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="projectName" className="text-[14px] text-(--muted)">
          نام پروژه
        </label>
        <TextInput
          name="projectName"
          id="projectName"
          defaultValue={edit ? "PName" : ""}
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="sort" className="text-[14px] text-(--muted)">
          دسته بندی
        </label>
        <TextInput name="sort" id="sort" defaultValue={edit ? "PSort" : ""} />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="shortExplain" className="text-[14px] text-(--muted)">
          توضیح مختصر
        </label>
        <TextInput
          name="shortExplain"
          id="shortExplain"
          defaultValue={edit ? "Short explain" : ""}
        />
      </div>

      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="sourceLink" className="text-[14px] text-(--muted)">
          لينک کد منبع
        </label>
        <TextInput
          name="sourceLink"
          id="sourceLink"
          defaultValue={edit ? "GitHub" : ""}
        />
      </div>

      <div className="w-full flex flex-col gap-2 md:col-span-2">
        <label htmlFor="sourceLink" className="text-[14px] text-(--muted)">
          آدرس سایت (در صورت آنلاین بودن)
        </label>
        <TextInput
          name="sourceLink"
          id="sourceLink"
          defaultValue={edit ? "www.abc.ir" : ""}
        />
      </div>

      <MultiSelect selected={selected} setSelected={setSelected} />

      <div className="w-full flex flex-col gap-2 md:col-span-2">
        <label htmlFor="explain" className="text-[14px] text-(--muted)">
          توضیحات
        </label>
        <textarea
          rows={5}
          name="explain"
          id="explain"
          defaultValue={"explanation"}
          className="px-3 py-1 border border-(--border) outline-0 bg-(--surface) rounded-lg focus:bg-(--surface-hover)"
        ></textarea>
      </div>

      <MainImageInput image={thumbnail} setImage={setThumbnail} />

      <GalleryImageInput images={images} setImages={setImages} />

      <Button theme="primary" type="submit" className="md:col-span-2">
        {edit ? "اعمال تغییرات" : "ايجاد"}
      </Button>
    </form>
  );
}
