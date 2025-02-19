import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontpage from './Frontpage';
import Header from './Header';
import Sidebar from './Sidebar';
import ViewUsers from './ViewUsers';

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  tabIndex?: number;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, ariaLabel, tabIndex }) => {
  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel} tabIndex={tabIndex}>
      {children}
    </button>
  );
};

export default Button;