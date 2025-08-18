import Input from '@/atoms/Input';
import { Application, Home_, Portfolio, Reques, User } from '@/icons';
import CClose from '@/icons/CClose';
import Search from '@/icons/Search';
import React from 'react';
import './navbar.css';

const Navbar = () => {
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
          <li className='active_nav'>
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
      <div className='relative'>
        <Input className='nav_input' placeholder='Search listings, users here...' />
        <Search className='absolute top-2 left-2' />
        <CClose className='absolute top-2 right-2 cursor-pointer' />
      </div>
    </div>
  );
};

export default Navbar;
