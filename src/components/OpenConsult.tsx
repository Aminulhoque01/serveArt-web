"use client";
import { useAppDispatch } from "@/store";
import { openConsult } from "@/store/uiSlice";

export default function OpenConsult({
  service,
  className,
  onClick,
  children,
}: {
  service?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        dispatch(openConsult(service));
      }}
    >
      {children}
    </button>
  );
}