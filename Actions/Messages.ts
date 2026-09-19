"use server";

import { getFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";
import { cookies } from "next/headers";

export async function GetAllMessages() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  try {
    const res = await getFetch("messages", { Authorization: `Bearer ${token}` });

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

export async function GetLatestMessages(limit: number){
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  try {
    const res = await getFetch(`messages?limit=${limit}`, { Authorization: `Bearer ${token}` });

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