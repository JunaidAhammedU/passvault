import React from "react";

type ProgressProps = {
  value: number; // Progress value (0 to 100)
  color?: string; // Background color for the progress bar
  className?: string; // Optional additional classes
};

const Progress: React.FC<ProgressProps> = ({
  value,
  color = "gray",
  className,
}) => {
  return (
    <div className={`w-full h-2 rounded-full bg-gray-200 ${className}`}>
      <div
        className="h-full rounded-full transition-all"
        style={{
          width: `${value}%`,
          backgroundColor: color, // Dynamically set color
        }}
      />
    </div>
  );
};

export default Progress;
