"use client"

import { Award, Box, Eye, Mail } from "lucide-react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { GetAllMessages } from "@/Actions/Messages";
import { GetAllAbilities } from "@/Actions/Abilities";
import { GetAllProjects } from "@/Actions/Projects";

export default function Cards(){
    const [messages, setMessages] = useState(0)
    const [abilities, setAbilities] = useState(0)
    const [projects, setProjects] = useState(0)

    useEffect(()=>{
        const request = async()=>{
            const reqMessages = await GetAllMessages()
            const reqAbilities = await GetAllAbilities()
            const reqProjects = await GetAllProjects()

            if(reqMessages.success){
                setMessages(reqMessages.data.length)
            }
            if(reqAbilities.success){
                setAbilities(reqAbilities.data.length)
            }
            if(reqProjects.success){
                setProjects(reqProjects.data.length)
            }
        }
        request()
    },[])
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <Card Icon={Mail} title="پیام های دریافتی" amount={messages}/>
            <Card Icon={Award} title="مهارت ها" amount={abilities}/>
            <Card Icon={Box} title="پروژه‌ها" amount={projects}/>
            <Card Icon={Eye} title="بازدید های سایت" amount={7}/>
        </div>
    )
}