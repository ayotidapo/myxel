import Button from '@/atoms/Button';
import { Adjust, SetUp, Track } from '@/icons';
import Calculator from '@/icons/Calculator';
import Image from 'next/image';

const BudgetSetup = () => {
  return (
    <div className='xxs:w-full rounded-[10px] md:w-[438px]'>
      <div className='flex h-[213px] justify-center rounded-tl-[12px] rounded-tr-[12px] bg-[#0C2841] pt-[25px]'>
        <div className='relative flex w-[385.05px] items-center justify-center rounded-tl-[12px] rounded-tr-[12px]'>
          <Image src='/assets/overlay.png' fill alt='overlay' />
          <Calculator className='relative' />
        </div>
      </div>
      <section className='rounded-br-[12px] rounded-bl-[12px] bg-[#ffffff] py-4'>
        <article className='flex items-center gap-4 px-7 py-2'>
          <SetUp />
          <div className='flex-1'>
            <span className='block text-[16px] font-semibold text-[#191919]'>
              Set up annual budgets by account category
            </span>
            <small className='ext-[#606060] text-[12px]'>
              Allocate funds across income and expense lines with full visibility.
            </small>
          </div>
        </article>
        <article className='flex items-center gap-4 px-7 py-2'>
          <Track />
          <div className='flex-1'>
            <span className='block text-[16px] font-semibold text-[#191919]'>
              Set up annual budgets by account category
            </span>
            <small className='ext-[#606060] text-[12px]'>
              Allocate funds across income and expense lines with full visibility.
            </small>
          </div>
        </article>
        <article className='flex items-center gap-4 px-7 py-2'>
          <Adjust />
          <div className='flex-1'>
            <span className='block text-[16px] font-semibold text-[#191919]'>
              Set up annual budgets by account category
            </span>
            <small className='ext-[#606060] text-[12px]'>
              Allocate funds across income and expense lines with full visibility.
            </small>
          </div>
        </article>
        <Button className='budget'>Create Budget</Button>
      </section>
    </div>
  );
};

export default BudgetSetup;
