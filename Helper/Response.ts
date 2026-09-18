type ResponseOptions<T> = {
  success?: boolean;
  message?: string;
  data?: T;
};

export default function Response<T>({
  success = true,
  message,
  data,
}: ResponseOptions<T>) {
  return {
    success,
    message,
    data,
  };
}
