import AboutMeForm from "@/Components/site-settings/AboutMeForm";
import AddressForm from "@/Components/site-settings/AddressForm";
import LinksForm from "@/Components/site-settings/LinksForm";
import Readyform from "@/Components/site-settings/ReadyForm";

export default function SiteSettingsPage() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">تنظیمات سایت</h2>

      <div className="w-full">
        <LinksForm />
      </div>

      <div className="w-full border-y border-(--border) py-4">
        <AddressForm />
      </div>

      <div className="w-full border-b border-(--border) py-4">
        <AboutMeForm />
      </div>

      <div className="w-full">
        <Readyform />
      </div>
    </div>
  );
}
