import { useRef, useEffect } from "react";

export function TextAreaBox({
  value,
  onChange,
  placeholder,
  size,
  rows = 4
}: {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  size?: string;
  rows?: number;
}) {

  const ref = useRef<HTMLTextAreaElement | null>(null);

  // Auto-resize
  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, [value]);

  return (
    <textarea
      ref={ref}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      className={`w-full resize-none rounded-xl px-3 py-3 bg-gray-800 text-gray-100 placeholder-gray-500
      border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-600/30
      text-${size || "base"}`}
    />
  );
}
