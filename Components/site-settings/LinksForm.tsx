import Button from "../Button/Button";
import TextInput from "../Input/Text";

export default function LinksForm() {
  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="instagram" className="text-[14px]">
          آدرس اینستاگرام
        </label>
        <TextInput name="instagram" id="instagram" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="telegram" className="text-[14px]">
          آدرس تلگرام
        </label>
        <TextInput name="telegram" id="telegram" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="github" className="text-[14px]">
          آدرس گیت هاب
        </label>
        <TextInput name="github" id="github" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="linkedin" className="text-[14px]">
          آدرس لینکدین
        </label>
        <TextInput name="linkedin" id="linkedin" />
      </div>

      <Button theme="primary">
        ثبت
      </Button>
    </form>
  );
}
