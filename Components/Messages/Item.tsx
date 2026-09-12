"use client";

import Link from "next/link";
import "./Messages.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function MessageItem() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Link
        href={""}
        className="message-item grid grid-cols-2 md:grid-cols-4"
        onClick={() => setShow(true)}
      >
        <p>نام مشترک</p>
        <p>موضوع پیام</p>
        <p>ایمیل</p>
        <p>زمان ارسال</p>
      </Link>

      <Modal show={show} setShow={setShow}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center sm:justify-items-normal border-b border-(--border) pb-2 text-[14px] text-(--muted)">
          <p>نام مشترک</p>
          <p>موضوع پیام</p>
          <p>ایمیل</p>
          <p>زمان ارسال</p>
        </div>
        <p className="text-[14px] text-justify py-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </Modal>
    </>
  );
}
