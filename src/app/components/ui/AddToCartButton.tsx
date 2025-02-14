'use client'
import { useState, ReactNode } from "react"; // Import ReactNode for the icon prop

// Button component accepts the label and icon as props
interface ButtonProps {
  label: string;
  icon: ReactNode;  // Accept icon as ReactNode
  addLabel: string
  tickIcon: ReactNode
}

export default function Button({ label, icon, addLabel, tickIcon }: ButtonProps) {
  const [addedToCart, setAddedToCart] = useState(false); // Each button will have its own state

  const handleClick = () => {
    setAddedToCart(true); // Change text when button is clicked
  };

  return (
    <button
      onClick={handleClick}
      className={`relative px-2 py-2 text-sm rounded-lg w-[185px] flex justify-center transition-all border-[#029fae] text-[#029fae] border-2 duration-200 active:scale-90 
    
      `}
    >
      <div className="flex gap-1">
        {icon}
        <span>{addedToCart ? addLabel : label}</span>
        {addedToCart ? tickIcon : ''}
      </div>
    </button>
  );
}
