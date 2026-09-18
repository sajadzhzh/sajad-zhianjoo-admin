"use client"

export default function TextInput({
  name,
  id,
  placeholder,
  className,
  defaultValue,
  onChange,
  type,
}: {
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (e: any)=> void;
  type?: "text" | "password";
}) {
  return (
    <input
      type={type ? type : "text"}
      name={name}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      className={`px-3 py-1 border border-(--border) outline-0 bg-(--surface) rounded-lg focus:bg-(--surface-hover) ${className}`}
    />
  );
}
