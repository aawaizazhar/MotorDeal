import { cn } from "@/lib/utils";

const Slider = ({ 
  className, 
  min = 0, 
  max = 100, 
  step = 1, 
  value, 
  onChange,
  ...props 
}) => {
  return (
    <div className={cn("relative flex items-center w-full", className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className={cn(
          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
          "accent-car-blue-600 hover:accent-car-blue-700",
          "focus:outline-none focus:ring-2 focus:ring-car-blue-500 focus:ring-opacity-50"
        )}
        {...props}
      />
    </div>
  );
};

export { Slider };
