"use server";

import { postFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";

export async function NewUser({
  userName,
  password,
  confirmPassword,
}: {
  userName: string;
  password: string;
  confirmPassword: string;
}) {
  if (!userName || !password || !confirmPassword) {
    return Response({
      success: false,
      message: "تمام مقادیر الزامی هستند!",
    });
  }

  if (password !== confirmPassword) {
    return Response({
      success: false,
      message: "مقادیر رمز عبور یکی نیست!",
    });
  }

  try {
    const res = await postFetch("auth/signup", { userName, password });

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
