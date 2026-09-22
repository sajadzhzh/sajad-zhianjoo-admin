const getFetch = async (url: string, headers: HeadersInit = {}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/${url}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }

    const error = await res.json();

    return {
      status: "error",
      message: error.message,
    };
    
  } catch (e: any) {
    return {
      status: "error",
      message: `مشکلی در دریافت اطلاعات پیش آمد.کد : ${e.message}`,
    };
  }
};

const postFetch = async (
  url: string,
  body: object,
  headers: HeadersInit = {},
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

const putFetch = async (
  url: string,
  body: object,
  headers: HeadersInit = {},
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/${url}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

const delFetch = async (url: string, headers: HeadersInit = {}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/${url}`, {
      method: "DELETE",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }

    const error = await res.json();

    return {
      status: "error",
      message: error.message,
    };
    
  } catch (e: any) {
    return {
      status: "error",
      message: `مشکلی در دریافت اطلاعات پیش آمد.کد : ${e.message}`,
    };
  }
};

export { delFetch, getFetch, postFetch, putFetch };
