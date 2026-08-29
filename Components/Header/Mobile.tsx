import HiddenMenu from "../Menu/Hidden/Index";

export default function Mobile(){
    return(
        <header className="flex lg:hidden header">
            <h2 className="font-bold text-[18px] ">پنل مدیریت</h2>

            <div className="max-w-20">
                <HiddenMenu />
            </div>
        </header>
    )
}