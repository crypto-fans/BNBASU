import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-bnb-dark text-white hover:bg-bnb-primary hover:shadow-bnb-accent/20",
    outline: "border-2 border-bnb-dark text-bnb-dark hover:bg-bnb-dark hover:text-white",
    gold: "bg-bnb-gold text-white hover:bg-yellow-600 shadow-yellow-500/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};