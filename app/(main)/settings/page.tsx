import NewUserForm from "@/Components/Settings/NewUserForm";
import ResetPasswordForm from "@/Components/Settings/ResetPassword";

export default function SettingsPage() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">تنظیمات</h2>

      <div className="w-full border-b border-(--border) pb-4">
        <ResetPasswordForm />
      </div>

      <div className="w-full">
        <h2 className="mb-2">ایجاد کاربر جدید</h2>

        <NewUserForm />
      </div>
    </div>
  );
}
