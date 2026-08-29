import { Award, Box, Eye, Mail } from "lucide-react";
import Card from "./Card";

export default function Cards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Card Icon={Mail} title="پیام های دریافتی" amount={7}/>
            <Card Icon={Award} title="مهارت ها" amount={7}/>
            <Card Icon={Box} title="پروژه‌ها" amount={7}/>
            <Card Icon={Eye} title="بازدید های سایت" amount={7}/>
        </div>
    )
}