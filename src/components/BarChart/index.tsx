import CArrow from '@/icons/CArrow';
import React from 'react';

const BarChart = () => {
  return (
    <div className='flex'>
      <div className='y-axis flex w-[26px] flex-col justify-between border-r border-r-[#E4E4E4] text-[10px] text-[#919191]'>
        <span>50m</span>
        <span>40m</span>
        <span>30m</span>
        <span>20m</span>
        <span>10m</span>
        <span>0</span>
        <span className='opacity-0'>.</span>
      </div>
      <div className='flex flex-1 gap-5 pl-4'>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[99px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[78px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[30px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Jan</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[18px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[78px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[30px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Feb</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[42px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[21px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[11px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Mar</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[42px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[72px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[30px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Apr</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[30px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[8px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[23px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>May</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[102px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[136px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[23px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Jun</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[69px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[104px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[53px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Jul</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[69px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[22px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[53px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Aug</span>
        </div>
        <div className='bar_month__div flex w-[18px] flex-col'>
          <div className='bar__container flex flex-1 items-end justify-between'>
            <span className='inline-flex h-[104px] w-[4px] bg-[#4545FE]'></span>
            <span className='inline-flex h-[96px] w-[4px] bg-[#12B76A]'></span>
            <span className='inline-flex h-[22px] w-[4px] bg-[#F04438]'></span>
          </div>
          <span className='month text-[10px] font-medium text-[#919191]'>Sep</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
