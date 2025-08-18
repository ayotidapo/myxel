import CArrow from '@/icons/CArrow';
import React from 'react';

const Metrics: React.FC = () => {
  return (
    <div className='grid flex-1 grid-cols-2 gap-3'>
      <div className='h-[73px] rounded-xl border border-[#E4E4E4] p-2.5'>
        <h3 className='text-[19px] font-semibold text-[#4545FE]'>₦120,000,000.00</h3>
        <div className='mt-1.5 flex items-center gap-1.5 text-[10px]'>
          <span className='font-medium text-[#3D3D3D]'>Total Inflow</span>
          <span className='increase inline-flex gap-1'>
            <CArrow className='c_arrow' /> 2.5%
          </span>
        </div>
      </div>
      <div className='h-[73px] rounded-xl border border-[#E4E4E4] p-2.5'>
        <h3 className='increase text-[19px] font-semibold'>₦50,000,000.00</h3>
        <div className='mt-1.5 flex items-center gap-1.5 text-[10px]'>
          <span className='font-medium text-[#3D3D3D]'>MMR</span>
          <span className='increase inline-flex gap-1'>
            <CArrow className='c_arrow' /> 2.5%
          </span>
        </div>
      </div>
      <div className='h-[73px] rounded-xl border border-[#E4E4E4] p-2.5'>
        <h3 className='increase text-[19px] font-semibold'>₦200,000,000.00</h3>
        <div className='mt-1.5 flex items-center gap-1.5 text-[10px]'>
          <span className='font-medium text-[#3D3D3D]'>Commission Revenue</span>
          <span className='increase inline-flex gap-1'>
            <CArrow className='c_arrow' /> 2.5%
          </span>
        </div>
      </div>
      <div className='h-[73px] rounded-xl border border-[#E4E4E4] p-2.5'>
        <h3 className='decrease text-[19px] font-semibold'>₦100,000,000.00</h3>
        <div className='mt-1.5 flex items-center gap-1.5 text-[10px]'>
          <span className='font-medium text-[#3D3D3D]'>GMV</span>
          <span className='decrease inline-flex gap-1'>
            <CArrow className='c_arrow' /> 2.5%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
