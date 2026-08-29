import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Header(){
    return(
        <div className="w-full">
            <Desktop />
            <Mobile />
        </div>
    )
}