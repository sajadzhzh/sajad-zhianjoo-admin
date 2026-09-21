"use client";

import { useEffect, useState } from "react";
import MultiSelect from "../Input/MultiSelect";
import TextInput from "../Input/Text";
import Button from "../Button/Button";
import MainImageInput from "../Input/MainImageInput";
import GalleryImageInput from "../Input/GalleryInput";
import post from "@/public/4.jpg";
import toast from "react-hot-toast";
import { EditProject, GetProjectById, NewProject } from "@/Actions/Projects";
import { useRouter } from "next/navigation";
import { urlToFile } from "@/Helper/URL";

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
  const [abilities, setAbilities] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<MainImage>({
    file: null,
    preview: edit ? post.src : null,
  });
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [projectName, setProjectName] = useState("");
  const [sort, setSort] = useState("");
  const [shortExplain, setShortExplain] = useState("");
  const [sourceLink, setSourceLink] = useState("");
  const [address, setAddress] = useState("");
  const [explain, setExplain] = useState("");
  const router = useRouter();

  useEffect(() => {
    const request = async () => {
      if (!id) return;

      const res = await GetProjectById(id);

      if (res.success) {
        setProjectName(res.data.name);
        setSort(res.data.sort);
        setShortExplain(res.data.short_description);
        setSourceLink(res.data.sourceLink);
        setAddress(JSON.parse(res.data.address));
        setAbilities(JSON.parse(JSON.parse(res.data.abilities)));
        setExplain(res.data.description);

        const thumbnailFile = await urlToFile(
          process.env.NEXT_PUBLIC_API_SERVER_URL + res.data.thumbnail,
        );

        setThumbnail({
          file: thumbnailFile,
          preview: res.data.thumbnail,
        });

        const parsedImages = JSON.parse(JSON.parse(res.data.images));

        const imagesWithFiles = await Promise.all(
          parsedImages.map(async (image: string) => {
            const file = await urlToFile(
              process.env.NEXT_PUBLIC_API_SERVER_URL + image,
            );

            return {
              file,
              preview: image,
            };
          }),
        );

        setImages(imagesWithFiles);
      }
    };

    if (edit) request();
  }, []);

  const handleCreate = async (e: any) => {
    e.preventDefault();
    if (
      !projectName ||
      !sort ||
      !shortExplain ||
      !sourceLink ||
      !explain ||
      abilities.length === 0 ||
      !thumbnail.preview ||
      images.length === 0
    ) {
      toast.error("بخش های خواسته شده الزامی هستند!");
    }

    const formData = new FormData();

    formData.append("projectName", projectName);
    formData.append("sort", sort);
    formData.append("shortExplain", shortExplain);
    formData.append("sourceLink", sourceLink);
    formData.append("address", address);
    formData.append("explain", explain);
    formData.append("abilities", JSON.stringify(abilities));
    if (thumbnail.file) {
      formData.append("thumbnail", thumbnail.file);
    }

    images.forEach((image) => {
      if (image.file) {
        formData.append("images", image.file);
      }
    });

    edit && id && formData.append("id", id);

    const res = edit ? await EditProject(formData) : await NewProject(formData);

    if (res?.success) {
      res.message && toast.success(res.message);
      setTimeout(() => {
        router.push("/projects");
      }, 2000);
    } else {
      res?.message && toast.error(res.message);
    }
  };

  return (
    <form
      className="space-y-2 w-full grid grid-cols-1 md:grid-cols-2 gap-2"
      onSubmit={(e) => handleCreate(e)}
    >
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="projectName" className="text-[14px] text-(--muted)">
          نام پروژه
        </label>
        <TextInput
          name="projectName"
          id="projectName"
          defaultValue={edit ? projectName : ""}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="sort" className="text-[14px] text-(--muted)">
          دسته بندی
        </label>
        <TextInput
          name="sort"
          id="sort"
          defaultValue={edit ? sort : ""}
          onChange={(e) => setSort(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="shortExplain" className="text-[14px] text-(--muted)">
          توضیح مختصر
        </label>
        <TextInput
          name="shortExplain"
          id="shortExplain"
          defaultValue={edit ? shortExplain : ""}
          onChange={(e) => setShortExplain(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-2 ">
        <label htmlFor="sourceLink" className="text-[14px] text-(--muted)">
          لينک کد منبع
        </label>
        <TextInput
          name="sourceLink"
          id="sourceLink"
          defaultValue={edit ? sourceLink : ""}
          onChange={(e) => setSourceLink(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-2 md:col-span-2">
        <label htmlFor="address" className="text-[14px] text-(--muted)">
          آدرس سایت (در صورت آنلاین بودن)
        </label>
        <TextInput
          name="address"
          id="address"
          defaultValue={edit ? address : ""}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <MultiSelect selected={abilities} setSelected={setAbilities} />

      <div className="w-full flex flex-col gap-2 md:col-span-2">
        <label htmlFor="explain" className="text-[14px] text-(--muted)">
          توضیحات
        </label>
        <textarea
          rows={5}
          name="explain"
          id="explain"
          defaultValue={explain}
          onChange={(e) => setExplain(e.target.value)}
          className="px-3 py-1 border border-(--border) outline-0 bg-(--surface) rounded-lg focus:bg-(--surface-hover)"
        ></textarea>
      </div>

      <MainImageInput image={thumbnail} setImage={setThumbnail} />

      <GalleryImageInput images={images} setImages={setImages} />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:col-span-2">
        <Button
          theme="primary"
          type="submit"
          className={edit ? "" : "md:col-span-2"}
        >
          {edit ? "اعمال تغییرات" : "ايجاد"}
        </Button>

        {edit && (
          <Button
            theme="normal"
            className="border border-red-600 bg-red-500/50 hover:bg-red-500/75"
          >
            حذف پروژه
          </Button>
        )}
      </div>
    </form>
  );
}
