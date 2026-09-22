"use server";

import { delFetch, getFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";
import { cookies } from "next/headers";

export async function GetAllProjects() {
  try {
    const res = await getFetch("projects");

    if (res.success) {
      return Response({
        success: res.success,
        data: res.data,
      });
    } else {
      return Response({
        success: res.success,
        message: res.message,
      });
    }
  } catch (e: any) {
    console.log(e.message);

    return Response({
      success: false,
      message: "مشکلی پیش آمد. لطفا مجدد تلاش کنید.",
    });
  }
}

export async function GetLatestProjects(limit: number) {
  try {
    const res = await getFetch(`projects?limit=${limit}`);

    if (res.success) {
      return Response({
        success: res.success,
        data: res.data,
      });
    } else {
      return Response({
        success: res.success,
        message: res.message,
      });
    }
  } catch (e: any) {
    console.log(e.message);

    return Response({
      success: false,
      message: "مشکلی پیش آمد. لطفا مجدد تلاش کنید.",
    });
  }
}

export async function GetProjectById(id: string) {
  try {
    const res = await getFetch(`projects/${id}`);

    if (res.success) {
      return Response({
        success: res.success,
        data: res.data,
      });
    } else {
      return Response({
        success: res.success,
        message: res.message,
      });
    }
  } catch (e: any) {
    console.log(e.message);

    return Response({
      success: false,
      message: "مشکلی پیش آمد. لطفا مجدد تلاش کنید.",
    });
  }
}

export async function NewProject(formData: FormData) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  const projectName = formData.get("projectName");
  const sort = formData.get("sort");
  const shortExplain = formData.get("shortExplain");
  const sourceLink = formData.get("sourceLink");
  const address = formData.get("address");
  const explain = formData.get("explain");
  const abilities = formData.get("abilities");
  const thumbnail = formData.get("thumbnail");
  const images = formData.getAll("images");

  if (
    !(thumbnail instanceof File) ||
    thumbnail.size <= 0 ||
    !["image/png", "image/jpeg", "image/webp"].includes(thumbnail.type)
  ) {
    return Response({
      success: false,
      message: "عکس اصلی انتخاب نشده است یا فرمت فایل صحیح نیست!",
    });
  }

  if (images.length <= 0) {
    return Response({
      success: false,
      message: "عکس های پروژه انتخاب نشده اند!",
    });
  }

  for (const image of images) {
    if (!(image instanceof File)) {
      return Response({
        success: false,
        message: "فایل ارسال شده قابل شناسایی نیست!",
      });
    }

    if (image.size <= 0) {
      return Response({
        success: false,
        message: "حجم فایل ارسالی صفر است!",
      });
    }

    if (!["image/png", "image/jpeg", "image/webp"].includes(image.type)) {
      return Response({
        success: false,
        message: "فرمت فایل‌های انتخاب شده اشتباه است.",
      });
    }
  }

  if (typeof abilities === "string") {
    const parsedAbilities = JSON.parse(abilities);

    if (parsedAbilities.length <= 0) {
      return Response({
        success: false,
        message: "مهارتی انتخاب نشده است!",
      });
    }
  }

  if (!projectName || !sort || !shortExplain || !sourceLink || !explain) {
    return Response({
      success: false,
      message: "تمام مقادیر خواسته شده اجباری هستند!",
    });
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/projects`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    );

    const finalRes = await res.json();

    if (finalRes.success) {
      return Response({
        success: finalRes.success,
        message: finalRes.message,
      });
    } else {
      return Response({
        success: finalRes.success,
        message: finalRes.message,
      });
    }
  } catch (e: any) {
    console.log(e.message);

    return Response({
      success: false,
      message: "مشکلی پیش آمد. لطفا مجدد تلاش کنید.",
    });
  }
}

export async function EditProject(formData: FormData) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  const projectName = formData.get("projectName");
  const sort = formData.get("sort");
  const shortExplain = formData.get("shortExplain");
  const sourceLink = formData.get("sourceLink");
  const address = formData.get("address");
  const explain = formData.get("explain");
  const abilities = formData.get("abilities");

  const thumbnail = formData.get("thumbnail");
  const images = formData.getAll("images");

  if (thumbnail instanceof File) {
    if (thumbnail.size <= 0) {
      return Response({
        success: false,
        message: "حجم عکس اصلی صفر است!",
      });
    }

    if (!["image/png", "image/jpeg", "image/webp"].includes(thumbnail.type)) {
      return Response({
        success: false,
        message: "فرمت عکس اصلی صحیح نیست.",
      });
    }
  }

  for (const image of images) {
    if (!(image instanceof File)) {
      return Response({
        success: false,
        message: "فایل ارسال شده قابل شناسایی نیست!",
      });
    }

    if (image.size <= 0) {
      return Response({
        success: false,
        message: "حجم فایل ارسالی صفر است!",
      });
    }

    if (!["image/png", "image/jpeg", "image/webp"].includes(image.type)) {
      return Response({
        success: false,
        message: "فرمت فایل‌های انتخاب شده اشتباه است.",
      });
    }
  }

  let parsedAbilities: string[];

  try {
    parsedAbilities = JSON.parse(
      typeof abilities === "string" ? abilities : "",
    );
  } catch {
    return Response({
      success: false,
      message: "مهارت‌های پروژه معتبر نیستند.",
    });
  }

  if (
    !Array.isArray(parsedAbilities) ||
    parsedAbilities.length === 0 ||
    !parsedAbilities.every(
      (ability) => typeof ability === "string" && ability.trim().length > 0,
    )
  ) {
    return Response({
      success: false,
      message: "مهارتی انتخاب نشده است!",
    });
  }

  if (!projectName || !sort || !shortExplain || !sourceLink || !explain) {
    return Response({
      success: false,
      message: "تمام مقادیر خواسته شده اجباری هستند!",
    });
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/projects/${formData.get(
        "id",
      )}`,
      {
        cache: "no-store",
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    );

    const finalRes = await res.json();

    return Response({
      success: finalRes.success,
      message: finalRes.message,
    });
  } catch (e: any) {
    console.log(e.message);

    return Response({
      success: false,
      message: "مشکلی پیش آمد. لطفا مجدد تلاش کنید.",
    });
  }
}

export async function DeleteProject(id: string) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }
  try {
    const res = await delFetch(`projects/${id}`, {
      Authorization: `Bearer ${token}`,
    });

    if (res.success) {
      return Response({
        success: res.success,
        data: res.data,
      });
    } else {
      return Response({
        success: res.success,
        message: res.message,
      });
    }
  } catch (e: any) {
    console.log(e.message);

    return Response({
      success: false,
      message: "مشکلی پیش آمد. لطفا مجدد تلاش کنید.",
    });
  }
}
