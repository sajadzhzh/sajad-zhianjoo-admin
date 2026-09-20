import { BeatLoader } from "react-spinners";

export default function Loading(){
    return <div className="w-full flex justify-center sm:col-span-2 md:col-span-3 lg:col-span-4">
        <BeatLoader color="#7c3aed"/>
    </div>
}