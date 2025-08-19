import Auth from '@/icons/Auth';
import Logout from '@/icons/Logout';
import React from 'react';

const Settings = () => {
  return (
    <section className='mt-1'>
      <div className='hover:bg-[#f5f5f5]'>
        <div className='flex items-center gap-4'>
          <span>
            <Auth />
          </span>
          <div className='flex-1 cursor-pointer gap-3 py-5 text-[20px] font-medium text-[#1a1a1a]'>Teams</div>
        </div>
        <hr className='border-[0.8px] text-[#E4E4E4]' />
      </div>
      <div className='hover:bg-[#f5f5f5]'>
        <div className='flex items-center gap-4'>
          <span>
            <Auth />
          </span>
          <div className='flex-1 cursor-pointer gap-3 py-5 text-[20px] font-medium text-[#1a1a1a]'>Contact Persons</div>
        </div>
        <hr className='border-[0.8px] text-[#E4E4E4]' />
      </div>
      <div className='hover:bg-[#f5f5f5]'>
        <div className='flex items-center gap-4'>
          <span>
            <Auth />
          </span>
          <div className='flex-1 cursor-pointer gap-3 py-5 text-[20px] font-medium text-[#1a1a1a]'>Change Password</div>
        </div>
        <hr className='border-[0.8px] text-[#E4E4E4]' />
      </div>
      <div className='hover:bg-[#f5f5f5]'>
        <div className='flex items-center gap-4'>
          <span>
            <Auth />
          </span>
          <div className='flex-1 cursor-pointer gap-3 py-5 text-[20px] font-medium text-[#1a1a1a]'>
            2 - Factor Authentication
          </div>
        </div>
        <hr className='border-[0.8px] text-[#E4E4E4]' />
      </div>
      <div className='text-[#E53935]'>
        <div className='flex items-center gap-4'>
          <Logout className='rotate-90' />
          <div className='flex-1 cursor-pointer gap-3 py-5 text-[20px] font-medium'>Logout</div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
