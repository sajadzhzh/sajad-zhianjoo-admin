"use server";

import { delFetch, getFetch, postFetch, putFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";
import { cookies } from "next/headers";

export async function GetAllAbilities() {
  try {
    const res = await getFetch("abilities");

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

export async function GetAbilityById(id: string) {
  try {
    const res = await getFetch(`abilities/${id}`);

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

export async function DeleteAbility(id: string) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا دوباره وارد شوید.",
    });
  }
  
  try {
    const res = await delFetch(`abilities/${id}`, {
      Authorization: `Bearer ${token}`,
    });

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

export async function NewAbility({
  name,
  sort,
}: {
  name: string;
  sort: string;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا دوباره وارد شوید.",
    });
  }

  if (!name || !sort) {
    return Response({
      success: false,
      message: "تمام بخش ها الزامی هستند!",
    });
  }

  try {
    const res = await postFetch(
      "abilities",
      { name, sort },
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

export async function EditAbility({
  name,
  sort,
  id,
}: {
  name: string;
  sort: string;
  id: string;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا دوباره وارد شوید.",
    });
  }

  if (!name || !sort) {
    return Response({
      success: false,
      message: "تمام بخش ها الزامی هستند!",
    });
  }

  try {
    const res = await putFetch(
      `abilities/${id}`,
      { name, sort },
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
