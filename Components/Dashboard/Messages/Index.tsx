import DMItem from "./Item";
import "./Messages.css";

export default function DashBoardMessages() {
  return (
    <div className="Container messages-container">
        <h2 className="text-[14px] font-bold py-1">آخرین پيام‌ها</h2>
        <div className="flex flex-col gap-1 lg:h-[30svh]">
            <DMItem />
            <DMItem />
            <DMItem />
            <DMItem />
        </div>
    </div>
  );
}
