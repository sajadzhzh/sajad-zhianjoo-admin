import Button from "../Button/Button";
import TextInput from "../Input/Text";

export default function LoginForm() {
  return (
    <form className="w-full mx-4  md:max-w-1/2 lg:max-w-1/3 bg-(--surface) py-8 px-5 rounded-lg border border-(--border) flex flex-col gap-2 items-center">
      <div>
        <h1 className="flex items-center justify-center gap-1 text-[20px] font-bold">
          سجاد ژیانجو
          <span className="rounded-full border-2 border-(--primary)"></span>
        </h1>
        <p className="text-[12px] text-(--muted)">
          لطفا نام کاربری و رمز عبور خود را وارد کنید.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="userName" className="text-[14px]">
          نام کاربری
        </label>
        <TextInput name="userName" id="userName" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password" className="text-[14px]">
          رمز عبور
        </label>
        <TextInput name="password" id="password" type="password"/>
      </div>

      <Button theme="primary">
        ورود
      </Button>
    </form>
  );
}
