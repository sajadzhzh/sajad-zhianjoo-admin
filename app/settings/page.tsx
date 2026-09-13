import ResetPasswordForm from "@/Components/Settings/ResetPassword";

export default function SettingsPage() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">تنظیمات</h2>

      <div className="w-full">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
