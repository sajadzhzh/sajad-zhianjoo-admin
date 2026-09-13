import ProjectForm from "@/Components/Projects/Form";

export default function NewProjectPage(){
    return(
        <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
            <h2 className="font-bold text-[16px]">پروژه جدید</h2>
            <ProjectForm />
        </div>
    )
}