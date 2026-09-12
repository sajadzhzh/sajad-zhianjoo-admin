import ResumeForm from "@/Components/Resume/form";

export default function ResumePage() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">رزومه</h2>

      <div className="w-full">
        <ResumeForm edit link="LINK_TO_RESUME"/>
      </div>
    </div>
  );
}
