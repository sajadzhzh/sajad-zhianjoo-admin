"use client";

import Link from "next/link";
import "./Messages.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { toJalaliDate } from "@/Helper/Date";

type MessageType = {
  id: number;
  name: string;
  title: string;
  text: string;
  email: string;
  created_at: string;
};

export default function MessageItem({ data }: { data: MessageType }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Link
        href={""}
        className="message-item grid grid-cols-2 md:grid-cols-4"
        onClick={() => setShow(true)}
      >
        <p>{data.name}</p>
        <p>{data.title}</p>
        <p>{data.email}</p>
        <p>{toJalaliDate(data.created_at)}</p>
      </Link>

      <Modal show={show} setShow={setShow}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center sm:justify-items-normal border-b border-(--border) pb-2 text-[14px] text-(--muted)">
          <p>{data.name}</p>
          <p>{data.title}</p>
          <p>{data.email}</p>
          <p>{toJalaliDate(data.created_at)}</p>
        </div>
        <p className="text-[14px] text-justify py-4">{data.text}</p>
      </Modal>
    </>
  );
}
