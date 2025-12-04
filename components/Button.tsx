import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#0071e3] hover:bg-[#0077ED] text-white focus:ring-[#0071e3] shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-[#1d1d1f] hover:bg-[#2d2d2f] text-white focus:ring-[#1d1d1f] shadow-sm",
    outline: "border border-[#1d1d1f]/30 text-[#1d1d1f] hover:bg-[#F5F5F7] hover:border-[#1d1d1f]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;