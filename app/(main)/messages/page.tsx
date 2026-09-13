import MessageItem from "@/Components/Messages/Item";

export default function MessagesPage() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">پیام‌ها</h2>

      <div className="w-full grid grid-cols-1 gap-2">
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </div>
    </div>
  );
}
