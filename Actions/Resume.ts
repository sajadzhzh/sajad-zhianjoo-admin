"use server"

import { getFetch, putFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";
import { cookies } from "next/headers";

export async function GetResume(){
    try {
    const res = await getFetch("resume");

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

export async function NewResume({
  link,
  is_active,
}: {
  link: string;
  is_active: boolean;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا دوباره وارد شوید.",
    });
  }

  if (!link) {
    return Response({
      success: false,
      message: "تمام بخش ها الزامی هستند!",
    });
  }
  

  try {
    const res = await putFetch(
      "resume",
      { link, is_active },
      { Authorization: `Bearer ${token}` },
    );

    if (res.success) {
      return Response({
        success: res.success,
        message: res.message,
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