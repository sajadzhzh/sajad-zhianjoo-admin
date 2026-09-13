import Button from "../Button/Button";
import TextInput from "../Input/Text";

export default function AboutMeForm() {
  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="heading" className="text-[14px]">
          هدر
        </label>
        <TextInput name="heading" id="heading" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="headingBold" className="text-[14px]">
          هدر رنگی
        </label>
        <TextInput name="headingBold" id="headingBold" />
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label htmlFor="aboutMe" className="text-[14px]">
          درباره من
        </label>
        <textarea
          rows={5}
          name="aboutMe"
          id="aboutMe"
          className="px-3 py-1 border border-(--border) outline-0 bg-(--surface) rounded-lg focus:bg-(--surface-hover)"
        />
      </div>

      <Button theme="primary" className="md:col-span-2 md:max-w-1/2">
        ثبت
      </Button>
    </form>
  );
}
