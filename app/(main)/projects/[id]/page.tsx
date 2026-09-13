import ProjectForm from "@/Components/Projects/Form";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">تنظیمات پروژه</h2>
      <ProjectForm edit id={id} />
    </div>
  );
}
