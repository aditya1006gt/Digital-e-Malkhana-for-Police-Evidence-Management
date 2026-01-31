import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react"; // 1. Added ReactNode
import { useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  path?: string;
  action?: () => void;
}

const SelectDropdown = ({
  label,
  menuItems
}: {
  label: ReactNode; // 2. Changed from string to ReactNode
  menuItems: MenuItem[];
}) => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative select-none" ref={ref}>
      {/* 3. Removed px-3 py-1 so the circle avatar isn't shifted */}
      <div
        className="cursor-pointer transition"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
      </div>

      {open && (
        <div
          className="absolute right-0 mt-2 z-50 w-44 
          bg-gray-900 border border-gray-800
          shadow-xl rounded-xl backdrop-blur-md
          divide-y divide-gray-800"
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setOpen(false);
                if (item.action) item.action();
                else if (item.path) nav(item.path);
              }}
              className="w-full cursor-pointer text-white text-left px-4 py-2 text-sm 
              hover:bg-gray-800 transition-colors first:rounded-t-xl last:rounded-b-xl"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;