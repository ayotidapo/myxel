import Button from '@/atoms/Button';
import Icon from '@/atoms/Icon';
import Input from '@/atoms/Input';
import { Application, Home_, Portfolio, Reques, User } from '@/icons';
import CArrow from '@/icons/CArrow';
import Caret from '@/icons/Caret';
import Close from '@/icons/Close';
import House from '@/icons/House';
import Search from '@/icons/Search';
import Users from '@/icons/Users';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container__'>
      <header>
        <div className='header__'>
          <Image src='/logo.png' alt='logo' width={154} height={26} className='object-contain' />
          <div className='header__icons'>
            <Button disabled>
              <Icon id='bell' />
            </Button>
            <Button>
              <Icon id='calculator' />
            </Button>
            <Button>
              <Icon id='calendar' />
            </Button>
            <Button disabled>
              <Icon id='message' />
            </Button>
            <span className='initial'>D</span>
          </div>
        </div>
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
            <Close className='absolute top-2 right-2 cursor-pointer' />
          </div>
        </div>
      </header>
      <main className='p-app-spacing pb-20'>
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
            <div className='flex px-5'>
              <div className='flex flex-1 gap-6 border border-amber-500 pl-7'>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[99px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[78px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[30px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Jan</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[18px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[78px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[30px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Feb</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[42px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[21px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[11px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Mar</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[42px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[72px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[30px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Apr</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[30px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[8px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[23px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>May</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[102px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[136px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[23px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Jun</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[69px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[104px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[53px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Jul</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[69px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[22px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[53px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Aug</span>
                </div>
                <div className='flex w-[18px] flex-col'>
                  <div className='bar__container flex flex-1 items-end justify-between'>
                    <span className='inline-flex h-[104px] w-[4px] bg-[#4545FE]'></span>
                    <span className='inline-flex h-[96px] w-[4px] bg-[#12B76A]'></span>
                    <span className='inline-flex h-[22px] w-[4px] bg-[#F04438]'></span>
                  </div>
                  <span className='month text-[10px] font-medium text-[#919191]'>Sep</span>
                </div>
              </div>
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
            </div>
          </div>
          <section className='overview_right__section'>
            <article className='corner-round overflow-hidden bg-white'>
              <div className='flex h-[50px] items-center gap-2 bg-[#f5f5f5] px-5'>
                <House className='inline-block' />{' '}
                <span className='text-sm font-medium text-[#292929]'>Listings Overview</span>
                <span className='ml-auto flex cursor-pointer items-center gap-1 text-xs font-medium text-[#4545FE]'>
                  <span>View all</span> <Caret />
                </span>
              </div>
              <div className='grid h-[calc(100%-50px)] grid-cols-3 gap-4 bg-white px-5'>
                <div className='flex h-full flex-col justify-center gap-2'>
                  <h3 className='text-sm font-medium text-[#525252]'>Total</h3>
                  <h2 className='text-2xl font-semibold text-[#141414]'>1.8k</h2>
                </div>
                <div className='flex h-full flex-col justify-center gap-2'>
                  <h3 className='text-sm font-medium text-[#525252]'>Active</h3>
                  <h2 className='text-2xl font-semibold text-[#141414]'>80</h2>
                </div>
                <div className='flex h-full flex-col justify-center gap-2'>
                  <h3 className='text-sm font-medium text-[#525252]'>Archived</h3>
                  <h2 className='text-2xl font-semibold text-[#141414]'>1k</h2>
                </div>
              </div>
            </article>
            <article className='corner-round overflow-hidden bg-white'>
              <div className='flex h-[50px] items-center gap-2 bg-[#f5f5f5] px-5'>
                <Users className='inline-block' />{' '}
                <span className='text-sm font-medium text-[#292929]'>Users Overview</span>
                <span className='ml-auto flex cursor-pointer items-center gap-1 text-xs font-medium text-[#4545FE]'>
                  <span>View all</span> <Caret />
                </span>
              </div>
              <div className='grid h-[calc(100%-50px)] grid-cols-3 gap-4 bg-white px-5'>
                <div className='flex h-full flex-col justify-center gap-2'>
                  <h3 className='text-sm font-medium text-[#525252]'>Total</h3>
                  <h2 className='text-2xl font-semibold text-[#141414]'>20.7k</h2>
                </div>
                <div className='flex h-full flex-col justify-center gap-2'>
                  <h3 className='text-sm font-medium text-[#525252]'>Riders</h3>
                  <h2 className='text-2xl font-semibold text-[#141414]'>8.5k</h2>
                </div>
                <div className='flex h-full flex-col justify-center gap-2'>
                  <h3 className='text-sm font-medium text-[#525252]'>Subscribers</h3>
                  <h2 className='text-2xl font-semibold text-[#141414]'>7.5k</h2>
                </div>
              </div>
            </article>
          </section>
        </section>
        <section className='carousel_wrapper'>
          <article className='relative h-[286px] overflow-hidden rounded-xl'>
            <Image src='/assets/building3.png' alt='building1' fill />
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
          <div className='chart'></div>
        </section>
      </main>
    </div>
  );
}
