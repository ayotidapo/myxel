import Arrow from '@/icons/Arrow';
import Close from '@/icons/Close';
import Navigate from '@/icons/Navigate';
import React from 'react';

const Calendar = () => {
  return (
    <section className='calendar bg-[#0D0D0D] text-[#ffffff]'>
      <div className='flex h-[50px] items-center gap-2 bg-[#171717] px-5'>
        <Arrow /> <span className='text-[16px] font-semibold'>Calendar</span>
        <Close
          className='ml-auto'
          onClick={() => {
            document.getElementById('dropDown')?.blur();
          }}
        />
      </div>
      <div className='p-5'>
        <div className='mb-4 flex justify-center gap-7'>
          <Navigate />
          <h3 className='text-[16px] font-semibold'> November 2023 </h3>
          <Navigate className='rotate-180' />
        </div>
        <table className='xxs:w-full h-[827px] md:w-[400px]'>
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
  );
};

export default Calendar;
