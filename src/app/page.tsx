'use client';
import Button from '@/atoms/Button';
import Icon from '@/atoms/Icon';
import Input from '@/atoms/Input';
import { Adjust, Application, Home_, Portfolio, Reques, SetUp, Track, User } from '@/icons';
import CArrow from '@/icons/CArrow';
import Caret from '@/icons/Caret';
import Close from '@/icons/Close';
import House from '@/icons/House';
import Search from '@/icons/Search';
import Users from '@/icons/Users';
import DropDown from '@/atoms/DropDown';
import Image from 'next/image';
import Navigate from '@/icons/Navigate';
import Arrow from '@/icons/Arrow';
import CClose from '@/icons/CClose';
import Modal from '@/atoms/Modal';
import Calculator from '@/icons/Calculator';

export default function Home() {
  return (
    <div className='container__'>
      <Modal open={true} onClose={() => null} bodyClose>
        <div className='w-[438px] rounded-[10px]'>
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
      </Modal>
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
            <DropDown
              component={
                <Button className='calendar'>
                  <Icon id='calendar' />
                </Button>
              }
              className='calendar_dropdown'
            >
              <section className='calendar bg-[#0D0D0D] text-[#ffffff]'>
                <div className='flex h-[50px] items-center gap-2 bg-[#171717] px-5'>
                  <Arrow /> <span className='text-[16px] font-semibold'>Calendar</span>
                  <Close className='ml-auto' />
                </div>
                <div className='p-5'>
                  <div className='mb-4 flex justify-center gap-7'>
                    <Navigate />
                    <h3 className='text-[16px] font-semibold'> November 2023 </h3>
                    <Navigate className='rotate-180' />
                  </div>
                  <table className='h-[827px] w-[400px]'>
                    <thead className='text-[7.58px]'>
                      <tr className='h-[20.36px]'>
                        <th>SUN</th>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THURS</th>
                        <th>FRI</th>
                        <th>SAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>29</th>
                        <th>30</th>
                        <th>31</th>
                        <th>NOV 1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                      </tr>
                      <tr>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                      </tr>
                      <tr>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                      </tr>
                      <tr>
                        <th>19</th>
                        <th>20</th>
                        <th>21</th>
                        <th>22</th>
                        <th>23</th>
                        <th>24</th>
                        <th>25</th>
                      </tr>
                      <tr>
                        <th>26</th>
                        <th>27</th>
                        <th>28</th>
                        <th>29</th>
                        <th>30</th>
                        <th>31</th>
                        <th>DEC 1</th>
                      </tr>
                      <tr>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                      </tr>
                      <tr>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
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
      </header>
      <main className='p-app-spacing pb-7'>
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
              <div className='y-axis flex w-[26px] flex-col justify-between border-r border-r-[#E4E4E4] text-[10px] text-[#919191]'>
                <span>50m</span>
                <span>40m</span>
                <span>30m</span>
                <span>20m</span>
                <span>10m</span>
                <span>0</span>
                <span className='opacity-0'>.</span>
              </div>
              <div className='flex flex-1 gap-6 pl-4'>
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
