"use client";

import { ImagePlus, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function MainImageInput({
  file,
  setFile,
}: {
  file: File | null;
  setFile: (file: any) => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const removeImage = () => {
    setFile(null);
    setPreview(null);
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="w-full md:col-span-2">
      <label className="mb-2 block text-[14px] text-(--muted)">تصویر اصلی پروژه</label>

      {!preview ? (
        <label
          htmlFor="main-image"
          className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-(--border) bg-(--surface) transition hover:border-(--primary)"
        >
          <ImagePlus size={32} className="mb-3 text-(--primary)" />

          <span className="text-sm">انتخاب تصویر اصلی</span>

          <span className="mt-1 text-xs text-(--muted)">PNG, JPG, WEBP</span>

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
            src={preview}
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

      {file && (
        <p className="mt-2 truncate text-xs text-(--muted)">{file.name}</p>
      )}
    </div>
  );
}
