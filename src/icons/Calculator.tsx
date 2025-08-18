interface Props {
  className?: string;
}

const Arrow: React.FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='80'
      height='80'
      fill='none'
      viewBox='0 0 80 80'
      className={className}
    >
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3.333'
        d='M33.333 73.333h13.334C63.333 73.333 70 66.666 70 49.999V30c0-16.666-6.667-23.333-23.333-23.333H33.333C16.667 6.666 10 13.333 10 29.999v20c0 16.667 6.667 23.334 23.333 23.334'
      ></path>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3.333'
        d='M55 25.268V28.6c0 2.733-2.233 5-5 5H30c-2.733 0-5-2.233-5-5v-3.333c0-2.734 2.233-5 5-5h20c2.767 0 5 2.233 5 5'
      ></path>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4.667'
        d='M27.12 46.667h.039M39.985 46.667h.038M52.846 46.667h.039M27.12 58.333h.039M39.985 58.333h.038M52.846 58.333h.039'
      ></path>
    </svg>
  );
};

export default Arrow;
