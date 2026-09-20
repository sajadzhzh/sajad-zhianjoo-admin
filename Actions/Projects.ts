"use server";

import { getFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";

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
