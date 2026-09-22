"use client";

import { GetAllMessages } from "@/Actions/Messages";
import MessageItem from "@/Components/Messages/Item";
import { useEffect, useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const res = await GetAllMessages();

      if (res.success) {
        setMessages(res.data);
        setLoading(false);
      } else {
        setMessages([]);
        setLoading(false);
      }
    };
    request();
  }, []);

  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">پیام‌ها</h2>

      <div className="w-full grid grid-cols-1 gap-2">
        {messages.length > 0 && messages.map((i, index) => <MessageItem key={index} data={i} />)}
      </div>
    </div>
  );
}
