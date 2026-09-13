import Button from "../Button/Button";
import TextInput from "../Input/Text";

export default function ResetPasswordForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[14px]">
          رمز عبور فعلی
        </label>
        <TextInput name="password" id="password" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="newPassword" className="text-[14px]">
          رمزعبور جدید
        </label>
        <TextInput name="newPassword" id="newPassword" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="newPasswordConfirm" className="text-[14px]">
          تکرار رمز عبور جدید
        </label>
        <TextInput name="newPasswordConfirm" id="newPasswordConfirm" />
      </div>

      <Button theme="primary" className="md:col-span-2 md:max-w-1/2">
        تغییر رمز عبور
      </Button>
    </form>
  );
}
