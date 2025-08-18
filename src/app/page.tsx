'use client';

import Button from '@/atoms/Button';
import Icon from '@/atoms/Icon';

import DropDown from '@/atoms/DropDown';
import Image from 'next/image';

import Modal from '@/atoms/Modal';
import { useState } from 'react';
import Calendar from '@/components/Calendar';
import BudgetSetup from '@/components/BudgetSetup';
import BarChart from '@/components/BarChart';
import CNavigate from '@/icons/CNavigate';
import Metrics from '@/components/Metrics';
import Overview from '@/components/Overview';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className='container__'>
      <Modal open={open} onClose={() => setOpen(false)} bodyClose>
        <BudgetSetup />
      </Modal>
      <header>
        <div className='header__'>
          <Image src='/logo.png' alt='logo' width={154} height={26} className='object-contain' />
          <div className='header__icons'>
            <Button disabled>
              <Icon id='bell' />
            </Button>
            <Button onClick={() => setOpen(true)}>
              <Icon id='calculator' />
            </Button>
            <DropDown
              component={
                <Button className='calendar'>
                  <Icon id='calendar' />
                </Button>
              }
              className='calendar_dropdown'
            >
              <Calendar />
            </DropDown>
            <Button disabled>
              <Icon id='message' />
            </Button>

            <DropDown
              component={
                <span className='initial relative'>
                  D
                  <span className='name_email'>
                    <span className='text-[#525252]] text-[16px] font-medium'>Dylan Frank</span>
                    <span className='block text-sm text-[#919191]'>dylanfran96@gmail.com</span>
                  </span>
                </span>
              }
              className='settings_dropdown'
            >
              <div className='settings__ hidden h-[475px] w-[360px] p-3.5'></div>
            </DropDown>
          </div>
        </div>
        <Navbar />
      </header>
      <main className='p-app-spacing pb-2'>
        <h3 className='h3'>Welcome, Ahmed</h3>
        <section className='overview'>
          <div className='corner-round overview_left__section'>
            <div className='flex items-center justify-between px-5'>
              <div>
                <h3 className='mt-1 mb-2.5 text-xl font-semibold text-[#191919]'>Sales Overview</h3>
                <span className='text-xs text-[#606060]'>Showing overview Jan 2022 - Sep 2022</span>
              </div>

              <Button className='v_transaction'>View Transactions</Button>
            </div>
            <div className='duration_div'>
              <span>1 Week </span>
              <span>1 Month</span>
              <span className='active_nav inline-block px-[21px] py-1.5'>1 Year</span>
            </div>
            <hr className='my-3.5 border-[#E4E4E4]' />
            <div className='flex items-center pr-5 pl-3'>
              <CNavigate className='mr-5 cursor-pointer' />
              <BarChart />
              <CNavigate className='mx-2.5 rotate-180 cursor-pointer' />
              <Metrics />
            </div>
          </div>
          <section className='overview_right__section'>
            <Overview
              title='Listings Overview'
              total='1.8k'
              active='80'
              archived='1k'
              item2Name='Active'
              item3Name='Archived'
            />
            <Overview
              title='Users Overview'
              total='20.7k'
              active='8.5k'
              archived='7.5k'
              item2Name='Riders'
              item3Name='Subscribers'
            />
          </section>
        </section>
        <section className='carousel_wrapper'>
          <article className='relative h-[286px] overflow-hidden rounded-xl'>
            <Image src='/assets/building2.png' alt='building1' fill />
            <div className='absolute z-20 flex h-full w-full flex-col justify-end bg-linear-[to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.6)] px-5'>
              <div className='mb-2 text-white'>
                <span className='block text-sm font-medium'>MOST CLICKED</span>
                <span className='text-lg font-semibold'>Urban Prime Plaza Premiere</span>
              </div>
              <div className='flex h-[18px] justify-center gap-2'>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
              </div>
            </div>
          </article>
          <article className='relative h-[286px] overflow-hidden rounded-xl'>
            <Image src='/assets/building2.png' alt='building1' fill />
            <div className='absolute z-20 flex h-full w-full flex-col justify-end bg-linear-[to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.6)] px-5'>
              <div className='mb-2 text-white'>
                <span className='block text-sm font-medium'> MOST WATCHLISTED</span>
                <span className='text-lg font-semibold'>Urban Prime Plaza Premiere</span>
              </div>
              <div className='flex h-[18px] justify-center gap-2'>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
              </div>
            </div>
          </article>
          <article className='relative h-[286px] overflow-hidden rounded-xl'>
            <Image src='/assets/building3.png' alt='building1' fill />
            <div className='absolute z-20 flex h-full w-full flex-col justify-end bg-linear-[to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.6)] px-5'>
              <div className='mb-2 text-white'>
                <span className='block text-sm font-medium'>HOTTEST LISTING</span>
                <span className='text-lg font-semibold'>Urban Prime Plaza Premiere</span>
              </div>
              <div className='flex h-[18px] justify-center gap-2'>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
                <span className='inline-block h-[6.63px] w-[6.63px] rounded-full bg-[#E5E5E5]'></span>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
