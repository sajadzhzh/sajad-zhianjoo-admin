import MenuItems from "./Items";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="w-full menu">
      <h1 className="flex items-center justify-center gap-1 text-[24px] font-bold">
        سجاد ژیانجو{" "}
        <span className="rounded-full border-2 border-(--primary)"></span>
      </h1>

      <MenuItems />
    </div>
  );
}
