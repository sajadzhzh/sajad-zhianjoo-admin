import Button from "../Button/Button";
import TextInput from "../Input/Text";

export default function AddressForm() {
  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className="text-[14px]">
          آدرس
        </label>
        <TextInput name="address" id="address" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="gmail" className="text-[14px]">
          آدرس ایمیل
        </label>
        <TextInput name="gmail" id="gmail" />
      </div>

      <Button theme="primary" className="md:col-span-2 md:max-w-1/2">ثبت</Button>
    </form>
  );
}
