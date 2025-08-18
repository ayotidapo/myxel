import Caret from '@/icons/Caret';
import House from '@/icons/House';
import React from 'react';

interface Props {
  title: string;
  total: string;
  active: string;
  archived: string;
  item2Name: string;
  item3Name: string;
}
const Overview: React.FC<Props> = (props) => {
  const { title, total, active, archived, item2Name, item3Name } = props;
  return (
    <article className='corner-round overflow-hidden bg-white'>
      <div className='flex h-[50px] items-center gap-2 bg-[#f5f5f5] px-5'>
        <House className='inline-block' /> <span className='text-sm font-medium text-[#292929]'>{title}</span>
        <span className='ml-auto flex cursor-pointer items-center gap-1 text-xs font-medium text-[#4545FE]'>
          <span>View all</span> <Caret />
        </span>
      </div>
      <div className='grid h-[calc(100%-50px)] grid-cols-3 gap-4 bg-white px-5'>
        <div className='flex h-full flex-col justify-center gap-2'>
          <h3 className='text-sm font-medium text-[#525252]'>Total</h3>
          <h2 className='text-2xl font-semibold text-[#141414]'>{total}</h2>
        </div>
        <div className='flex h-full flex-col justify-center gap-2'>
          <h3 className='text-sm font-medium text-[#525252]'>{item2Name}</h3>
          <h2 className='text-2xl font-semibold text-[#141414]'>{active}</h2>
        </div>
        <div className='flex h-full flex-col justify-center gap-2'>
          <h3 className='text-sm font-medium text-[#525252]'>{item3Name}</h3>
          <h2 className='text-2xl font-semibold text-[#141414]'>{archived}</h2>
        </div>
      </div>
    </article>
  );
};

export default Overview;
