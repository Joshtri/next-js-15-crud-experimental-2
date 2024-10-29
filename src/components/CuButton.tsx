// components/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const CuButton: React.FC<ButtonProps> = ({ label, onClick, color = 'primary', size = 'md', href }) => {
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  const buttonContent = (
    <button
      className={`btn btn-${color} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return href ? (
    <Link href={href}>{buttonContent}</Link>
  ) : (
    buttonContent
  );
};

export default CuButton;
