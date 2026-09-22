"use client";

import { useEffect, useState } from "react";
import SelectBox from "../Input/SelectBox";
import TextInput from "../Input/Text";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import {
  DeleteAbility,
  EditAbility,
  GetAbilityById,
  NewAbility,
} from "@/Actions/Abilities";
import { useRouter } from "next/navigation";

export default function AbilityForm({
  edit,
  id,
}: {
  edit?: boolean;
  id?: string;
}) {
  const [sort, setSort] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const request = async () => {
      if (id) {
        const res = await GetAbilityById(id);

        if (res.success) {
          setName(res.data.name);
          setSort(res.data.sort);
        } else {
          setName("");
          setSort("");
          res.message && toast.error(res.message);
        }
      }
    };
    if (edit) {
      request();
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !sort) {
      toast.error("تمام بخش ها الزامی هستند!");
    }

    try {
      const res =
        edit && id
          ? await EditAbility({ name, sort, id })
          : await NewAbility({ name, sort });

      if (res.success) {
        res.message && toast.success(res.message);
        setTimeout(() => {
          router.push("/abilities");
        }, 2000);
      } else {
        res.message && toast.error(res.message);
      }
    } catch (e: any) {
      toast.error("مشکلی در ارسال و دریافت اطلاعات پیش آمد.");
    }
  };

  const handleDelete = async () => {
    if (id) {
      const res = await DeleteAbility(id);

      if (res.success) {
        res.message && toast.success(res.message);
        setTimeout(() => {
          router.push("/abilities");
        }, 2000);
      } else {
        res.message && toast.error(res.message);
      }
    }
  };
  return (
    <form
      className="space-y-2 w-full grid grid-cols-1 md:grid-cols-2 gap-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-[14px]">
          عنوان مهارت
        </label>
        <TextInput
          name="name"
          id="name"
          defaultValue={edit ? name : ""}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label className="text-[14px]">دسته بندی</label>
        <SelectBox
          value={sort}
          setValue={setSort}
          options={[
            { label: "فرانت‌اند", value: "فرانت‌اند" },
            { label: "بک‌اند", value: "بک‌اند" },
            { label: "مهارت عمومی", value: "مهارت عمومی" },
          ]}
        />
      </div>

      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <Button theme="primary" type="submit">
          {edit ? "اعمال تغییرات" : "ایجاد مهارت"}
        </Button>

        {edit && (
          <Button
            theme="normal"
            onClick={handleDelete}
            className="border border-red-600 bg-red-500/50 hover:bg-red-500/75"
          >
            حذف مهارت
          </Button>
        )}
      </div>
    </form>
  );
}
