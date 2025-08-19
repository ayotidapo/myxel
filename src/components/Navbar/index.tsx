import Input from '@/atoms/Input';
import { Application, Home_, Portfolio, Reques, User } from '@/icons';
import CClose from '@/icons/CClose';
import Search from '@/icons/Search';
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [text, setText] = useState('');
  return (
    <div className='navigation__wrapper'>
      <nav className='navigations'>
        <ul className='ul'>
          <li className='active_nav'>
            <Home_ /> <span>Dashboard</span>
          </li>
          <li>
            <Portfolio />
            <span>Listing</span>
          </li>
          <li>
            <User />
            <span>Users</span>
          </li>
          <li>
            <Reques />
            <span>Request</span>
          </li>
          <li>
            <Application />
            <span>Applications</span>
          </li>
        </ul>
      </nav>
      <div className='xxs:self-end relative lg:self-center'>
        <Input
          className='nav_input'
          placeholder='Search listings, users here...'
          value={text}
          onChange={(e) => setText(e?.target?.value)}
        />
        <Search className='absolute top-2 left-2' />
        {text.length > 1 && (
          <CClose
            className='absolute top-[15px] right-2 h-4 w-4 cursor-pointer text-[#525252]'
            onClick={() => setText('')}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
//navigation__wrapper => flex-direction: column;
//overview: height:auto , flex-direction: column;

//overview_right__section => flex-direction: row; width:auto gap:20px

// overview_right__section > article => flex:1

//replace padding: 0 80px with padding: 0 20px;

//bar_chart_wrapper =>flex-direction: column; align-items: stretch; hide those small arrow
