import AbilityForm from "@/Components/Abilities/Form";

export default function NewAbility() {
  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">مهارت جدید</h2>

      <AbilityForm />
    </div>
  );
}
