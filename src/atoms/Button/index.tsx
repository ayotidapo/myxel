import React from 'react';
import './btn.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'button';
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | any) => void;
  disabled?: boolean;
  value?: string;
}

const Button: React.FC<Props> = (props) => {
  const { children, type = 'submit', className = '', ...rest } = props;
  return (
    <button type={type} className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
