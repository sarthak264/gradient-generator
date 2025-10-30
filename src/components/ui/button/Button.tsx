import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
}

const Button = ({ children, theme, ...props }: ButtonProps) => {
  return (
    <button className={`${theme == 'blue' ? 'blueBtn' : ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
