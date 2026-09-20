export default function Empty(text: string) {
  return (
    <p className="w-full sm:col-span-2 md:col-span-3 lg:col-span-4 text-center text-red-600 border border-red-600 bg-red-500/15 py-2 rounded">
      {text}
    </p>
  );
}
