import { BaseProps } from "@/app/types/ui";
import { cn } from "@/app/lib/utils";

interface InputProps extends BaseProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  icon?: React.ReactNode;
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Input({
  label,
  placeholder,
  type = "text",
  error,
  size = "md",
  disabled,
  className,
  value,
  onChange,
  id,
  name,
  icon,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-base font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          name={name}
          className={cn(
            "w-full rounded-lg transition-colors",
            icon ? "pl-10" : "pl-4",
            "pr-4 py-2.5",
            "border border-base focus:border-accent focus:ring-1 focus:ring-accent outline-none",
            "text-base bg-base",
            error && "border-red-500",
            disabled && "bg-gray-100 cursor-not-allowed",
            className
          )}
        />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
