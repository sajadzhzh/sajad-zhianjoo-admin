export default function TextInput({
  name,
  id,
  placeholder,
  className,
  defaultValue,
}: {
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
}) {
  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`px-3 py-1 border border-(--border) outline-0 bg-(--surface) rounded-lg focus:bg-(--surface-hover) ${className}`}
    />
  );
}
