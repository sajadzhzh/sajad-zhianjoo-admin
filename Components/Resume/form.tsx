import Button from "../Button/Button";
import TextInput from "../Input/Text";

export default function ResumeForm({ edit, link }: { edit?: boolean; link?: string; }) {
  return (
    <form className="w-full grid grid-cols-1 gap-2">
      <div className="flex flex-col gap-2 md:max-w-1/2">
        <label htmlFor="resumeLink" className="text-[14px]">لینک رزومه</label>
        <TextInput name="resumeLink" id="resumeLink" defaultValue={edit ? link : ""}/>
      </div>
      <Button theme="primary" className="md:max-w-1/4">
        {edit ? "اعمال تغییر" : "ثبت"}
      </Button>
    </form>
  );
}
