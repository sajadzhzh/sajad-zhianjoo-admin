"use client";

import { useEffect, useState } from "react";
import DMItem from "./Item";
import "./Messages.css";
import { GetLatestMessages } from "@/Actions/Messages";
import Empty from "@/Components/Empty";
import Loading from "@/app/(main)/Loading";

type Message = {
  id: number;
  name: string;
  title: string;
  email: string;
  text: string;
  created_at: string;
};

export default function DashBoardMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const res = await GetLatestMessages(4);

      if (res.success) {
        setMessages(res.data);
        setLoading(false);
      }

      setLoading(false);
    };
    request();
  }, []);

  return (
    <div className="Container messages-container">
      <h2 className="text-[14px] font-bold py-1">آخرین پيام‌ها</h2>
      <div className="flex flex-col gap-1 lg:h-[30svh]">
        {messages &&
          messages.map((i) => (
            <DMItem
              key={i.id}
              name={i?.name}
              title={i?.title}
              time={i?.created_at}
            />
          ))}

        {messages.length < 1 && !loading && Empty("پیامی برای شما ارسال نشده است")}

        {loading && (<Loading />)}
      </div>
    </div>
  );
}
