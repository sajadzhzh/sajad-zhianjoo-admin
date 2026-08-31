"use client";

import { ImagePlus, X } from "lucide-react";

type MainImage = {
  file: File | null;
  preview: string | null;
};

type Props = {
  image: MainImage;
  setImage: React.Dispatch<React.SetStateAction<MainImage>>;
};

export default function MainImageInput({
  image,
  setImage,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // اگر قبلاً یک preview از نوع blob داشتیم،
    // قبل از جایگزینی آزادش می‌کنیم
    if (image.preview?.startsWith("blob:")) {
      URL.revokeObjectURL(image.preview);
    }

    setImage({
      file,
      preview: URL.createObjectURL(file),
    });
  };

  const removeImage = () => {
    if (image.preview?.startsWith("blob:")) {
      URL.revokeObjectURL(image.preview);
    }

    setImage({
      file: null,
      preview: null,
    });
  };

  return (
    <div className="w-full md:col-span-2">
      <label className="mb-2 block text-[14px] text-(--muted)">
        تصویر اصلی پروژه
      </label>

      {!image.preview ? (
        <label
          htmlFor="main-image"
          className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-(--border) bg-(--surface) transition hover:border-(--primary)"
        >
          <ImagePlus
            size={32}
            className="mb-3 text-(--primary)"
          />

          <span className="text-sm">
            انتخاب تصویر اصلی
          </span>

          <span className="mt-1 text-xs text-(--muted)">
            PNG, JPG, WEBP
          </span>

          <input
            id="main-image"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      ) : (
        <div className="relative h-56 overflow-hidden rounded-xl border border-(--border)">
          <img
            src={image.preview}
            alt="تصویر اصلی پروژه"
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            onClick={removeImage}
            className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 text-white transition hover:bg-red-500"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {image.file && (
        <p className="mt-2 truncate text-xs text-(--muted)">
          {image.file.name}
        </p>
      )}
    </div>
  );
}