"use client";

import { ImagePlus, X } from "lucide-react";
import { useEffect } from "react";
import { GalleryImage } from "../Projects/Form";

export default function GalleryImageInput({
  images,
  setImages,
}: {
  images: GalleryImage[];
  setImages: (file: any) => void;
}) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev: any) => [...prev, ...newImages]);

    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev: any) => {
      const image = prev[index];

      URL.revokeObjectURL(image.preview);

      return prev.filter((_: any, i: any) => i !== index);
    });
  };

  useEffect(() => {
    return () => {
      images.forEach((image: any) => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, []);

  return (
    <div className="w-full md:col-span-2">
      <label className="mb-2 block text-[14px] text-(--muted)">تصاویر پروژه</label>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={`${image.file.name}-${index}`}
            className="group relative aspect-video overflow-hidden rounded-xl border border-(--border)"
          >
            <img
              src={image.preview}
              alt={image.file.name}
              className="h-full w-full object-cover"
            />

            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-500"
            >
              <X size={16} />
            </button>
          </div>
        ))}

        <label
          htmlFor="gallery-images"
          className="flex aspect-video cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-(--border) bg-(--surface) transition hover:border-(--primary)"
        >
          <ImagePlus size={26} className="mb-2 text-(--primary)" />

          <span className="text-xs">افزودن تصویر</span>

          <input
            id="gallery-images"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            multiple
            onChange={handleChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
