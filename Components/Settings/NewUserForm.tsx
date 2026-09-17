import Button from "../Button/Button";
import TextInput from "../Input/Text";

export default function NewUserForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="userName" className="text-[14px]">
          نام کاربری
        </label>
        <TextInput name="userName" id="userName" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[14px]">
          رمزعبور
        </label>
        <TextInput name="password" id="password" type="password" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="passwordConfirm" className="text-[14px]">
          تکرار رمز عبور
        </label>
        <TextInput
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
        />
      </div>

      <Button theme="primary" className="md:col-span-2 md:max-w-1/2">
        ایجاد کاربر
      </Button>
    </form>
  );
}
