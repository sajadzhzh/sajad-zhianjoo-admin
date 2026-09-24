"use server";

import { getFetch, putFetch } from "@/Helper/Fetch";
import Response from "@/Helper/Response";
import { cookies } from "next/headers";

export async function GetSocialMedia() {
  try {
    const res = await getFetch("info/social-media");

    if (JSON.parse(res.success)) {
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

export async function UpdateSocialMedia({
  instagram,
  telegram,
  github,
  linkedin,
}: {
  instagram: string;
  telegram: string;
  github: string;
  linkedin: string;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  if (!instagram || !telegram || !github || !linkedin) {
    return Response({
      success: false,
      message: "تمام بخش‌ها الزامی هستند!",
    });
  }

  try {
    const res = await putFetch(
      "info/social-media",
      { instagram, telegram, github, linkedin },
      { Authorization: `Bearer ${token}` },
    );

    if (JSON.parse(res.success)) {
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

export async function GetAddress() {
  try {
    const res = await getFetch("info/address");

    if (JSON.parse(res.success)) {
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

export async function UpdateAddress({
  address,
  gmail,
}: {
  address: string;
  gmail: string;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  if (!address || !gmail) {
    return Response({
      success: false,
      message: "تمام بخش‌ها الزامی هستند!",
    });
  }

  try {
    const res = await putFetch(
      "info/address",
      { address, gmail },
      { Authorization: `Bearer ${token}` },
    );

    if (JSON.parse(res.success)) {
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

export async function GetAboutMe() {
  try {
    const res = await getFetch("info/about-me");

    if (JSON.parse(res.success)) {
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

export async function UpdateAboutMe({
  header,
  header_bold,
  about_me,
}: {
  header: string;
  header_bold: string;
  about_me: string;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  if (!header || !header_bold || !about_me) {
    return Response({
      success: false,
      message: "تمام بخش‌ها الزامی هستند!",
    });
  }

  try {
    const res = await putFetch(
      "info/about-me",
      { header, header_bold, about_me },
      { Authorization: `Bearer ${token}` },
    );

    if (JSON.parse(res.success)) {
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

export async function GetAvailable() {
  try {
    const res = await getFetch("info/available");

    if (JSON.parse(res.success)) {
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

export async function UpdateAvailable({
  is_available,
}: {
  is_available: boolean;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return Response({
      success: false,
      message: "توکن شما پاک یا منقضی شده است. لطفا مجدد وارد شوید.",
    });
  }

  try {
    const res = await putFetch(
      "info/available",
      { is_available },
      { Authorization: `Bearer ${token}` },
    );

    if (JSON.parse(res.success)) {
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