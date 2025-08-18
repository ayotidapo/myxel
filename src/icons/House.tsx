interface Props {
  className?: string;
}

const House: React.FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='21'
      fill='none'
      viewBox='0 0 22 21'
      className={`${className}`}
    >
      <path
        stroke='#4545FE'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M21 20H1M1 9l8.126-6.5a3 3 0 0 1 3.748 0L21 9m-6.5-5.5v-2A.5.5 0 0 1 15 1h2.5a.5.5 0 0 1 .5.5v5M3 20V7.5M19 20V7.5'
      ></path>
      <path
        stroke='#4545FE'
        strokeWidth='1.5'
        d='M14 20v-5c0-1.414 0-2.121-.44-2.56C13.122 12 12.415 12 11 12s-2.121 0-2.56.44C8 12.878 8 13.585 8 15v5m5-12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
      ></path>
    </svg>
  );
};

export default House;
