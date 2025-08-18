import React from 'react';
import './dropdown.css';

interface Props {
  className?: string;
  component?: React.ReactNode;
  children: React.ReactNode;
}

const DropDown: React.FC<Props> = (props) => {
  const { className = '', component: Component, children } = props;

  return (
    <div className={`dropdown ${className}`} tabIndex={0} id='dropDown'>
      {Component}
      <div className='dropdown__content'>{children}</div>
    </div>
  );
};

export default DropDown;
